import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

class CheckAuthRouter extends Component {
    async componentDidMount() {
        const token = await AsyncStorage.getItem('TOKEN');

        if (token) {
            this.props.navigation.navigate('HomeStack');
            this.props.navigation.navigate('AdminStack');
               
        } else {
            this.props.navigation.navigate('AuthStack');       
        }
    }

    render() {
        return null;
    }
}

export default CheckAuthRouter;
