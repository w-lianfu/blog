import React from 'react';
import ReactDom, { render } from 'react-dom'
import 'babel-polyfill'

import Home from './container/home'

import './scss/common.scss'

render(
  <Home />,
  document.getElementById('root')
)
