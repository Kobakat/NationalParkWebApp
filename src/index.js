import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App.js'
import getParkByActivity from './park/get-park-by-activity'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.querySelector('#root')
)

getParkByActivity('climbing')
