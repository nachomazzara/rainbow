import { normalizeTypes, action } from '../commons/utils'

export const CONNECT_WALLET = normalizeTypes('connect wallet')

export function connectWalletRequest() {
  return action(CONNECT_WALLET.request)
}

export function connectWalletSuccess(eth, address) {
  return action(CONNECT_WALLET.success, { eth, address })
}

export function connectWalletFailure(error) {
  return action(CONNECT_WALLET.failure, { error })
}
