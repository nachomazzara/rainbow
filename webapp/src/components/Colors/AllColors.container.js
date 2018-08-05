import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { getColors, getLoading } from '../../modules/color/selectors'
import { getAddress } from '../../modules/wallet/selectors'
import { locations } from '../../locations'
import Colors from './Colors'

const mapState = state => ({
  colors: getColors(state),
  isLoading: getLoading(state),
  address: getAddress(state)
})

const mapDispatch = dispatch => ({
  goTo: () => dispatch(push(locations.new()))
})

export default connect(
  mapState,
  mapDispatch
)(Colors)
