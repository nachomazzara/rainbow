import React from 'react'
import PropTypes from 'prop-types'

import './Colors.css'

export default class Colors extends React.PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    goTo: PropTypes.func.isRequired
  }

  render() {
    const { colors, goTo } = this.props
    return (
      <React.Fragment>
        <button className="go" onClick={goTo}>
          {colors.length > 7 ? 'See Rainbow' : 'see All'}
        </button>
        <div className="rainbow">
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                height: `calc(100vh / ${colors.length})`
              }}
            >
              <p>{color}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
