import React, {Component} from 'react';

//import Login from './screens/loginScreens/loginScreen';
//import { firebaseApp } from './components/FirebaseConfig';
import {CheckAuth} from './routes/router';

export default class App extends Component {
  render() {
      return <CheckAuth />
  }
}
