import React from 'react'
import ReactDOM from 'react-dom'
import { Counter } from 'micro_frontend_components/Counter'
;<Counter />
import { Micro1 } from 'micro_frontend_components/Micro1'
import { Micro2 } from 'micro_frontend_components/Micro2'

import './index.css'

const App = () => (
  <div className="container " style={{ border: '5px solid red' }}>
    <h1>CONTAINER APPLICATION</h1>
    <Micro1
      stylesTOcontainer={{ border: '5px solid blue' }}
      title={'MICRO-FRONTEND-1'}
    />
    <Micro2
      stylesTOcontainer={{ border: '5px solid brown' }}
      title={'MICRO-FRONTEND-2'}
    />
    <Counter />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
