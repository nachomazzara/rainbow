import { connect } from 'react-redux'

import NewColor from './NewColor'
import { createColorRequest } from '../../modules/color/actions'
import { getLoading, getLoadingTx } from '../../modules/color/selectors'
import { getAddress } from '../../modules/wallet/selectors'

const mapState = state => ({
  isLoading: getLoading(state),
  isLoadingTx: getLoadingTx(state),
  address: getAddress(state)
})

const mapDispatch = dispatch => ({
  onCreateColor: (color, metadata) =>
    dispatch(createColorRequest(color, metadata))
})

export default connect(
  mapState,
  mapDispatch
)(NewColor)
