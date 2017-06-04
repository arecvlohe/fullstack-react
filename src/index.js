import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import App from './components/app'
import store from './store'

const build = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
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
