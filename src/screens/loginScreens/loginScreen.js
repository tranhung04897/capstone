import React, { Component } from 'react';
import { StyleSheet, Text,View, TouchableOpacity, AsyncStorage, Alert  } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
import firebase from 'react-native-firebase';
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebase.database();
        this.state = {
            txtEmail:'',
            txtPassword:'',
            txtWarning: '', 
        }
    }
    onChangeInput = (text, name) => {
        this.setState({ [name]: text});
    }

    navToRegister = () => {
        this.props.navigation.navigate('Register_Form');
    }

    onSubmit = () => {
        const { txtEmail, txtPassword } = this.state;
        if(txtEmail === '' || txtPassword === ''){
            this.setState({ txtWarning: 'Thông tin không hợp lệ!' });
            return;
        } else {
            firebase.auth().signInWithEmailAndPassword(txtEmail,txtPassword)
            .then(()=>{
                var userId = firebase.auth().currentUser.uid;
                if(userId ==='nuMW1WN177PeyQrybFy2Q9gwd3u1'){
                    this.setState({ txtWarning: '' }, () => {
                        AsyncStorage.setItem('TOKEN', userId).then(() => {
                            this.props.navigation.navigate('Admin_Form');
                        }).catch(error => console.log(error));
                    });
                }else {
                    this.setState({ txtWarning: '' }, () => {
                        AsyncStorage.setItem('TOKEN', userId).then(() => {
                            this.props.navigation.navigate('Account_Form');
                        }).catch(error => console.log(error));
                    });
                }
            })
            .catch(function(error) {
                Alert.alert(
                    'Notification',
                    'Email or password is not correct',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                )
                });
        }
    }

    render() {
        const { txtWarning, txtEmail, txtPassword } = this.state;

        return (

            <View style={ styles.container } >
                <View style={styles.content}>
                    <Text>{this.state.items}</Text>
                    <CustomTextInput 
                        placeholder="Email"
                        value={txtEmail}
                        onChangeText={text => this.onChangeInput(text, 'txtEmail')}
                    />

                    <CustomTextInput
                        secureTextEntry
                        placeholder="Password"
                        value={txtPassword}
                        onChangeText={text => this.onChangeInput(text, 'txtPassword')}
                    />

                    <Text style={styles.txtWarning}>{txtWarning}</Text>

                    

                    <CustomTouchable 
                        onPress={this.onSubmit}
                    >
                        <Text style={{fontWeight: 'bold',fontSize:15}}>
                            Sign-In
                        </Text>
                    </CustomTouchable>
                    <TouchableOpacity style={{marginBottom:10}}
                        onPress={this.navToRegister}
                    >
                        <Text style={styles.txtSignup}>
                            Sign-Up Account
                        </Text>
                    </TouchableOpacity>         
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    txtSignup:{
        color:'blue',
        fontStyle:'italic',
        fontSize:15,
        textDecorationLine:'underline',
    },
    txtWarning: {
        color: 'red',
    },
  });