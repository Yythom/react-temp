import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

import Toast from 'react-toast-mobile';
import 'react-toast-mobile/lib/react-toast-mobile.css';

ReactDOM.render(
  <Provider store={store}><Toast /> <App /></Provider>
  ,
  document.getElementById('root')
);
