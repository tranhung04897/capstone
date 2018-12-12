import React, {Component} from 'react';
import { AsyncStorage, Alert } from 'react-native';

import firebase from 'react-native-firebase';


//import Login from './screens/loginScreens/loginScreen';
//import { firebaseApp } from './components/FirebaseConfig';
import {CheckAuth} from './routes/router';
//import {Test} from './screens/test'
export default class App extends Component {
  async componentDidMount() {
    this.checkPermission();

    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(fcmToken => {
        // Process your token as required
        alert('Resasdas', fcmToken);
    });

    this.createNotificationListeners();
  }

  componentWillUnmount() {
      this.onTokenRefreshListener();
      this.notificationListener();
      this.notificationOpenedListener();
  }
    

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }

  async requestPermission() {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        alert('Permission rejected');
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');

    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();

        if (fcmToken) {
            // user has a device token
            await AsyncStorage.setItem('fcmToken', fcmToken);
        } 
    }

    alert(fcmToken);

  }
  
  async createNotificationListeners() {
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      alert('>> Notification')
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
    });
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        this.showAlert(title, body);
    });
  
    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    });
  
    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }
  
  showAlert(title, body) {
    Alert.alert(
      title, body,
      [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }

  render() {
      return <CheckAuth />
  }
}
