import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
class CheckAuthRouter extends Component {
    async componentDidMount() {
        const token = await AsyncStorage.getItem('TOKEN');
        if (token ) {
            if(token === 'nuMW1WN177PeyQrybFy2Q9gwd3u1'){
                this.props.navigation.navigate('Admin_Form');   
            }
            else {
                this.props.navigation.navigate('Account_Form');
            }
        } else {
            this.props.navigation.navigate('AuthStack');       
        }
    }
    render() {
        return null;
    }
}

export default CheckAuthRouter;
