import React from 'react'
import ReactDOM from 'react-dom'
import { Counter } from './components/Counter'
import { Micro1 } from './components/Micro1'
import { Micro2 } from './components/Micro2'

import './index.css'

const App = () => (
  <div className="container">
    <Micro1 />
    <Micro2 />
    <Counter />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
