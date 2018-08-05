import { connect } from 'react-redux'

import NewColor from './NewColor'
import { getLoading } from '../../modules/color/selectors'
import { createColorRequest } from '../../modules/color/actions'

const mapState = state => ({
  isLoading: getLoading(state)
})

const mapDispatch = dispatch => ({
  onCreateColor: (color, metadata) =>
    dispatch(createColorRequest(color, metadata))
})

export default connect(
  mapState,
  mapDispatch
)(NewColor)
