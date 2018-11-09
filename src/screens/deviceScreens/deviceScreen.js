import React, { Component } from 'react';
import { StyleSheet, Text,View,  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
//import CustomTouchable from '../../components/CustomTouchable';
export default class DeviceScreen extends Component {
    
    render() {
        return (

            <View style={ styles.container } >
                <Text>Devices</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'gray'
    },
  });