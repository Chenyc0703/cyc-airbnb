import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import useScrollTop from './hooks/useScrollTop'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

import routes from './router'

const App = memo(() => {
  useScrollTop()
  return (
    <>
      <AppHeader/>
      <div>{useRoutes(routes)}</div>
      <AppFooter/>
    </>
  )
})

export default App