import React from 'react'
import PropTypes from 'prop-types'

export default class Wallet extends React.PureComponent {
  static propTypes = {
    onConnectWallet: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.onConnectWallet()
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
