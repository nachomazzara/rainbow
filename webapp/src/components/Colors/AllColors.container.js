import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { getColors } from '../../modules/color/selectors'
import { locations } from '../../locations'
import Colors from './Colors'

const mapState = state => ({
  colors: getColors(state)
})

const mapDispatch = dispatch => ({
  goTo: () => dispatch(push(locations.root()))
})

export default connect(
  mapState,
  mapDispatch
)(Colors)
