import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
export default class MenuAccount extends Component {
    onLogout = () => {
        AsyncStorage.removeItem('TOKEN').then(() => {
            this.props.navigation.navigate('AuthStack');
        }).catch(error => {
            console.log('>> Error remove token:', error);   
        });
    }
    onChangePass = () => {
        this.props.navigation.navigate('ChangePass_Form');
    }
    onEdit = () => {
        this.props.navigation.navigate('Editprofile_Form');
    }
    onView = ()=> {
        this.props.navigation.navigate('Infoprofile_Form');
    }
    render() {
        return (
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={this.onView}
                    style={styles.btn}
                >   
                    <Text style={styles.touchTxt}>
                    
                        My Profile 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.onChangePass}
                >
                    <Text style={styles.touchTxt}>
                        Change Password
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.onLogout}
                >
                    
                    <Text style={styles.touchTxt}>
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    menuContainer:{
        flex:1,
        justifyContent:'flex-start',

    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-around',
        borderBottomWidth:2,
        borderBottomColor:'white',
        
    },
    touchTxt:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom:10,
        paddingStart:10,
        color:'white',
    }
});