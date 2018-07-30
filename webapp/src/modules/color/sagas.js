import { select, takeLatest, call, put } from 'redux-saga/effects'

import { FETCH_COLORS, fetchColorsSuccess } from './actions'
import { getContracts } from '../wallet/selectors'

export default function* colorSagas() {
  yield takeLatest(FETCH_COLORS.request, handleFetchColors)
}

function* handleFetchColors() {
  const { rainbow } = yield select(getContracts)
  const totalSupply = yield call(() => rainbow.methods.totalSupply().call())
  const colors = []
  for (let i = 0; i < totalSupply; i++) {
    const color = yield call(() => rainbow.methods.getColor(i).call())
    colors.push(color)
  }
  yield put(fetchColorsSuccess(colors))
}
