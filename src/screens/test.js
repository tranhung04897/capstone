import React, {Component} from 'react';
import { View, Text  } from 'react-native';
//import firebase from 'react-native-firebase';

class Testmess extends Component {
  /*async componentDidMount() {
    this.checkPermission();
  }

    //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }

    //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken', value);
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
  }

    //2
  async requestPermission() {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
  }*/
    render() {
      return (
        <View style={{flex: 1}}>
          <Text>Welcome to React Native!</Text>
        </View>
      );
    }
  }
  export default Testmess;