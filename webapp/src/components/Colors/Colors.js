import React from 'react'
import PropTypes from 'prop-types'

import { Loading } from '../Shared/'
import './Colors.css'

export default class Colors extends React.PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    goTo: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    address: PropTypes.string
  }

  render() {
    const { colors, goTo, isLoading, address } = this.props
    return isLoading ? (
      <Loading />
    ) : (
      <div className={colors.length > 7 ? 'all-colors' : 'rainbow'}>
        {colors.map(({ color, data }, index) => (
          <React.Fragment key={index}>
            <div style={{ background: color }}>
              {data.name && (
                <p className="hidden">{`${data.name} ${data.name}`}</p>
              )}
              <p className="color">{color}</p>
            </div>
            {index === colors.length - 1 &&
              address && (
                <div className="add-color" onClick={goTo}>
                  <p>{'Add Color'}</p>
                </div>
              )}
          </React.Fragment>
        ))}
      </div>
    )
  }
}
