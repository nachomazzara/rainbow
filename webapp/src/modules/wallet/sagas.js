import { takeLatest, put, call } from 'redux-saga/effects'
import Web3 from 'web3'

import rainbowTokenAbi from '../../rainbow-contract/RainbowToken.json'
import {
  CONNECT_WALLET,
  connectWalletSuccess,
  connectWalletFailure
} from './actions'
import { fetchColorsRequest } from '../color/actions'

export default function* walletSagas() {
  yield takeLatest(CONNECT_WALLET.request, handleConnectWallet)
}

function* handleConnectWallet() {
  try {
    let web3
    if (
      typeof window !== 'undefined' &&
      window.web3 &&
      window.web3.currentProvider
    ) {
      web3 = new Web3(window.web3.currentProvider)
    } else {
      web3 = new Web3('https://ropsten.infura.io')
    }

    const rainbow = new web3.eth.Contract(
      rainbowTokenAbi.abi,
      '0x75b928c02c7d57957d862f041c741baacf5aee6d'
    )

    const address = yield call(() => web3.eth.getAccounts())

    yield put(
      connectWalletSuccess(
        { web3, contracts: { rainbow } },
        address.length ? address[0] : ''
      )
    )
    yield put(fetchColorsRequest())
  } catch (e) {
    yield put(connectWalletFailure('wallet    ' + e.message))
  }
}
