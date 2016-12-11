// jshint ignore: start
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoApp from '.reducers/todoApp'
import App from './components/App/'

// if (process.env.NODE_ENV !== 'production') {
//   React.Perf = require('react-addons-perf')
// }

const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const ReduxApp = (
  <Provider>
    <App />
  </Provider>
)

render(ReduxApp, document.getElementById('app'))
