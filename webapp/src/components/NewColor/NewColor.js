import React from 'react'
import PropTypes from 'prop-types'
import { HuePicker } from 'react-color'

import './NewColor.css'

export default class NewColor extends React.PureComponent {
  state = {
    color: '',
    name: '',
    description: ''
  }

  static props = {
    isLoading: PropTypes.bool.isRequired,
    onCreateColor: PropTypes.func.isRequired
  }

  handleChangeComplete = color => {
    this.setState({ color: color.hex })
  }

  createColor = () => {
    const { color, name, description } = this.state
    const { onCreateColor } = this.props
    onCreateColor(color, { name, description })
  }

  renderLoading = () => (
    <div className="pending-tx">
      <span>{'Transaction pending'}</span>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )

  render() {
    const { isLoading } = this.props
    const { color } = this.state

    return (
      <div className="new-color">
        <div className="formWrapper">
          <HuePicker
            color={color}
            width="100%"
            onChangeComplete={this.handleChangeComplete}
          />
          <p className="selected-color" style={{ background: color }} />
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
          {!isLoading ? (
            <button onClick={this.createColor}>{'Create Color'}</button>
          ) : (
            this.renderLoading()
          )}
        </div>
      </div>
    )
  }
}
