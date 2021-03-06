import { select, takeLatest, call, put, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import {
  FETCH_COLORS,
  fetchColorsSuccess,
  CREATE_COLOR,
  fetchColorsFailure,
  createColorFailure,
  createColorSuccess
} from './actions'
import { getContracts, getAddress } from '../wallet/selectors'
import { isInvalidColor, normalizeColor } from './utils'
import { locations } from '../../locations'

export default function* colorSagas() {
  yield takeLatest(FETCH_COLORS.request, handleFetchColors)
  yield takeLatest(CREATE_COLOR.request, createColor)
}

function* handleFetchColors() {
  try {
    const { rainbow } = yield select(getContracts)
    const totalSupply = yield call(() => rainbow.methods.totalSupply().call())
    const colors = []
    for (let i = 0; i < totalSupply; i++) {
      let data = {}
      const [color /*, metadata */] = yield all([
        call(() => rainbow.methods.getColor(i).call())
        // call(() => rainbow.methods.tokenURI(i).call())
      ])
      const normalizedColor = normalizeColor(color)
      if (isInvalidColor(normalizedColor)) {
        continue
      }
      // if (metadata.indexOf('https://jsonblob.com/api/jsonBlob/') !== -1) {
      //   data = yield call(() =>
      //     fetch(metadata).then(response => response.json())
      //   )
      // }
      colors.push({ color: normalizedColor, data })
    }
    yield put(fetchColorsSuccess(colors))
  } catch (e) {
    yield put(fetchColorsFailure(e.message))
  }
}

function* createColor({ payload }) {
  try {
    const { color, metadata } = payload
    if (!color.length) {
      throw Error('Empty color')
    }

    const from = yield select(getAddress)
    if (!from) {
      throw Error('Unlock, set Ropsten network or install Metamask')
    }
    // const jsonBlob = yield call(() =>
    //   fetch('https://jsonblob.com/api/jsonBlob', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json; charset=utf-8'
    //     },
    //     body: JSON.stringify(metadata)
    //   })
    // )
    // const uri = jsonBlob.headers.get('Location')
    const { rainbow } = yield select(getContracts)
    const tx = yield call(() =>
      rainbow.methods.addColor(color, '').send({ from })
    )

    yield put(
      createColorSuccess(
        `https://ropsten.etherscan.io/tx/${tx.transactionHash}`,
        { color, data: metadata }
      )
    )
    yield put(push(locations.root()))
  } catch (e) {
    yield put(createColorFailure(e.message))
  }
}
