import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { getRainbowColors, getLoading } from '../../modules/color/selectors'
import { locations } from '../../locations'
import Colors from './Colors'

const mapState = state => ({
  colors: getRainbowColors(state),
  isLoading: getLoading(state)
})

const mapDispatch = dispatch => ({
  goTo: () => dispatch(push(locations.new()))
})

export default connect(
  mapState,
  mapDispatch
)(Colors)
