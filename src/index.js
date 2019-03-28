import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

//layout
import App from './App'


ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('#root')
)
