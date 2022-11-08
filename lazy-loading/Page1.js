import React from 'react'
//import Home from '../pages/home/Home'

const Home = React.lazy(() => import('../pages/home/Home'))
export default function Page1() {
  return (
    <div>
      <Home />
    </div>
  )
}
