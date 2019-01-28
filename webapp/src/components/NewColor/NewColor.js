import React from 'react'
import PropTypes from 'prop-types'
import { HuePicker } from 'react-color'

import { Loading } from '../Shared/'

import './NewColor.css'

export default class NewColor extends React.PureComponent {
  state = {
    color: '',
    name: '',
    description: '',
    error: null
  }

  static props = {
    isLoading: PropTypes.bool.isRequired,
    isLoadingTx: PropTypes.bool.isRequired,
    onCreateColor: PropTypes.func.isRequired,
    address: PropTypes.string
  }

  handleChangeComplete = color => {
    this.setState({ color: color.hex, error: null })
  }

  createColor = () => {
    const { color, name, description } = this.state
    const { onCreateColor } = this.props
    if (color) {
      onCreateColor(color, { name, description })
    } else {
      this.setState({ error: 'Please select a color' })
    }
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
    const { isLoading, isLoadingTx, address } = this.props
    const { color, error } = this.state

    return isLoading || !address ? (
      <Loading />
    ) : (
      <div className="new-color">
        <div className="formWrapper">
          <HuePicker
            color={color}
            width="100%"
            onChange={this.handleChangeComplete}
          />
          <p className="color">
            {`Color: ${color ? `${color}` : ''}`}
            <span className="selected-color" style={{ background: color }} />
          </p>

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
          {error && <p className="error">{error}</p>}
          {!isLoadingTx ? (
            <button onClick={this.createColor}>{'Create Color'}</button>
          ) : (
            this.renderLoading()
          )}
        </div>
      </div>
    )
  }
}
