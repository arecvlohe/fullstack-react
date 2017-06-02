import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/app'

const build = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

build(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app', () => {
    build(App)
  })
}
