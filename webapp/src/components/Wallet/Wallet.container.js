import { connect } from 'react-redux'

import Wallet from './Wallet'
import { connectWalletRequest } from '../../modules/wallet/actions'

const mapState = state => ({
  state
})

const mapDispatch = dispatch => ({
  onConnectWallet: () => dispatch(connectWalletRequest())
})

export default connect(
  mapState,
  mapDispatch
)(Wallet)
