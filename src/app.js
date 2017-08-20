import React from 'react';
import ReactDom, { render } from 'react-dom'
import 'babel-polyfill'

import Home from './container/home'

render(
  <Home />,
  document.getElementById('root')
)
