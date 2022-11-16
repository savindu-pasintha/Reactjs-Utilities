import React from 'react'
import WithPermission from './RoutingHandle/WithPermission'

const Settings = () => {
  return (
    <WithPermission roleRequired="ADMIN" message="Settings Only Admin can view">
      <div className="settings">
        <h1>Welcome to settings page</h1>
        <></>
      </div>
    </WithPermission>
  )
}

export default Settings
