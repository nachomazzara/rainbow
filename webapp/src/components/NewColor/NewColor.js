import React from 'react'
import PropTypes from 'prop-types'

import './NewColor.css'

export default class NewColor extends React.PureComponent {
  state = {
    color: '',
    name: '',
    description: ''
  }

  static props = {
    onCreateColor: PropTypes.func.isRequired
  }

  createColor = () => {
    const { color, name, description } = this.state
    const { onCreateColor } = this.props
    onCreateColor(color, { name, description })
  }

  render() {
    return (
      <div className="new-color">
        <div>
          <input
            type="text"
            placeholder="#ffffff or white"
            onChange={e => this.setState({ color: e.target.value })}
          />
          <input
            type="text"
            placeholder="Name"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <button onClick={this.createColor}>{'Create Color'}</button>
        </div>
      </div>
    )
  }
}
