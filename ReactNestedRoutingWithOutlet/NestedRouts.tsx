import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Details } from './Tabs/Datails'
import { Followers } from './Tabs/Followers'
import { Following } from './Tabs/Following'
import { Profile } from './Tabs/Profile'
import { TabNav } from './Tabs/TabNav'

function NewstedRouts() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<TabNav />} />
        
        <Route path="/profile" element={<TabNav />}>{/** Udin watenn on content ek */}
          {/** Ud content ekt yatin watenn on content ek */}
          <Route path="/profile/details" element={<Details />} />
          <Route path="/profile/followers" element={<Followers />} />
          <Route path="/profile/following" element={<Following />} />
        </Route>

      </Routes>
    </div>
  )
}

export default NewstedRouts
