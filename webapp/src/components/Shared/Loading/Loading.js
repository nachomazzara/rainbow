import React from 'react'

import './Loading.css'

const Loading = () => (
  <div className="loading-container">
    <p className="loading-tags">&lt;</p>
    <p className="loading-text">{"I'M"}</p>
    <p className="loading-tags">/&gt;</p>
    <p className="loading-text ethereum">{'Connecting to Ethereum...'}</p>
  </div>
)

export default Loading
