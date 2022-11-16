import React from 'react'
import WithPermission from '../RoutingHandle/WithPermission'

const Tab3 = () => {
  return (
    <div className="tab3">
      <WithPermission
        roleRequired="ADMIN"
        message="Tab 3 Content Only Admin can view"
      >
        <h1>Welcome Admin!</h1>
        <button>Edit</button>
      </WithPermission>
    </div>
  )
}

export default Tab3
