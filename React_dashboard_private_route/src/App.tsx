import React from 'react';

import MainRoutes from './components/RoutingHandle/MainRoutes'
import Sidebar from './components/Sidebar'


import './styles.css'

function App() {
  return (
    <div className="app">
     
     {/** Sidebar */}
     <Sidebar/>
     {/** Inner container */}
    <MainRoutes/>
    </div>
  );
}

export default App;
