import { connect } from 'react-redux'

import NewColor from './NewColor'
import { createColorRequest } from '../../modules/color/actions'

const mapDispatch = dispatch => ({
  onCreateColor: (color, metadata) =>
    dispatch(createColorRequest(color, metadata))
})

export default connect(
  () => ({}),
  mapDispatch
)(NewColor)
