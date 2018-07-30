import { all } from 'redux-saga/effects'

import walletSagas from './modules/wallet/sagas'
import colorSagas from './modules/color/sagas'
// import rainbow from 'rainbow-contract/RainbowToken.json'

// const walletSaga = createWalletSaga({
//   contract: rainbow,
// })

export function* rootSaga() {
  yield all([walletSagas(), colorSagas()])
}
