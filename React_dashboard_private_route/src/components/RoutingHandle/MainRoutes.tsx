import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Loading from '../RoutingErrorPages/Loading/Loading'

const InnerContent = lazy(() => import('../InnerContent'))
const Dashboard = lazy(() => import('../Dashboard'))
const Tabs = lazy(() => import('../Tabs/Tabs'))
const Settings = lazy(() => import('../Settings'))
const Login = lazy(() => import('../Login'))
const Users = lazy(() => import('../Users'))
const SingleUser = lazy(() => import('../SingleUser'))
const NewUser = lazy(() => import('../NewUser'))
const DynamicForm = lazy(() => import('../DynamicForm'))

const Tab1 = lazy(() => import('../Tabs/Tab1'))
const Tab2 = lazy(() => import('../Tabs/Tab2'))
const Tab3 = lazy(() => import('../Tabs/Tab3'))

const ProtectedRoutes = lazy(() => import('./ProtectedRoutes'))
const PublicRoutes = lazy(() => import('./PublicRoutes'))
const PermissionDenied = lazy(() =>
  import('../RoutingErrorPages/PermissionDenied'),
)
const PageNotFound = lazy(() => import('../RoutingErrorPages/PageNotFound'))

const MainRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route
            path="tabs"
            element={<Tabs props={{ userName: 'savindu pasintha' }} />}
          >
            <Route path="/tabs" element={<Navigate replace to="tab1" />} />{/** nested route defalut tab1 */}
            <Route path="tab1" element={<Tab1 />} />
            <Route path="tab3" element={<Tab3 />} />
            <Route
              path="tab2"
              element={<ProtectedRoutes roleRequired="ADMIN" />}
            >
              <Route path="/tabs/tab2" element={<Tab2 />} />
            </Route>
          </Route>

          {/** Wrap all Route under PublicRoutes element */}
          <Route path="login" element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="settings" element={<Settings />} />
          <Route path="dynamic-form" element={<DynamicForm />} />
          <Route
            path="users"
            element={<Users extraItem="test extra item from router" />}
          />
          <Route path="users/:userId" element={<SingleUser />} />
          <Route path="users/new" element={<NewUser />} />
        </Route>
      </Route>

      {/** Permission denied & Page not found route */}
      <Route path="/denied" element={<PermissionDenied />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Suspense>
)

export default MainRoutes

/*
import InnerContent from "./components/InnerContent"
import Dashboard from "./components/Dashboard"
import Tabs from "./components/Tabs"
import Settings from "./components/Settings"
import Login from "./components/Login"
import Users from "./components/Users"
import SingleUser from "./components/SingleUser"
import NewUser from "./components/NewUser"
import DynamicForm from "./components/DynamicForm"

import Tab1 from "./components/Tab1"
import Tab2 from "./components/Tab2"
import Tab3 from "./components/Tab3"

import ProtectedRoutes from "./components/ProtectedRoutes"
import PublicRoutes from "./components/PublicRoutes"
import PermissionDenied from "./components/PermissionDenied"
*/
