import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configStore from './store';

import './app.less';

const store = configStore();

const App = (props) => {
  // componentDidMount () {}
  //
  // componentDidShow () {}
  //
  // componentDidHide () {}
  //
  // componentDidCatchError () {}

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
};

export default App;
