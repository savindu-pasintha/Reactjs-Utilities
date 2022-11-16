import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NewstedRouts from './NestedRouts'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NewstedRouts />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

