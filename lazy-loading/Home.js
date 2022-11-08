import React, { lazy, Suspense } from 'react'

const Page2 = () => <div>Page 2 Loaded .</div>

const LasyLoadingPage = lazy(() => import('./Page1'))
const LasyLoadingPage2 = lazy(() => <Page2 />)

export default function Home() {
  return (
    <div>
      <Suspense
        fallback={
          <div
            style={{
              backgroundColor: 'black',
              width: '100%',
              height: '100vh',
            }}
          >
            till LasyLoadingPage loading load this component - you can use
            spineer
          </div>
        }
      >
        <LasyLoadingPage />
        <Suspense fallback={<>Still Loading Page 2.</>}>
          <LasyLoadingPage2 />
        </Suspense>
      </Suspense>
    </div>
  )
}
