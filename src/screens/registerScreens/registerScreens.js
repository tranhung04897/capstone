import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
//import { FirebaseConfig } from '../../components/FirebaseConfig';
import firebase from 'react-native-firebase';
class RegisterScreens extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail:'',
            txtConfirm:'',
            txtPassword:'',
        };
    }
    onChangeInput = (text, name) => {
        
        this.setState({ [name]: text});
        
    }
    onSubmit = () => {
        var checkMail= firebase.auth().authResult.user;
        if( this.state.txtEmail === '' || this.state.txtPassword ===''
        || this.state.txtConfirm ===''){
            Alert.alert(
                'Notification',
                'Sign-up Fail',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
        }else {
            if(this.state.txtPassword !== this.state.txtConfirm ){
                Alert.alert(
                    'Notification',
                    'Password not match',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                  )
            }
            else{
                firebase.auth().createUserWithEmailAndPassword(this.state.txtEmail, this.state.txtPassword)
                .then(()=>{
                    Alert.alert(
                        'Notification',
                        'Sign-up Success with: '+this.state.txtEmail,
                        [
                            {text: 'OK', onPress: () => console.log(this.props.navigation.navigate('Main_Home'))},
                            
                        ],
                        
                    )
                    this.setState({
                        txtEmail:'',
                        txtConfirm:'',
                        txtPassword:'',
                    });
                })
                .catch(function(error) {
                    Alert.alert(
                        'Notification',
                        'Please enter the correct email format or email just',
                        [
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        ],
                        { cancelable: false }
                    )
                    });
          
            }
        }
    }
    render() {
        return (
            <View style={ styles.container } >
            <CustomHeader name="Register Screen" />
            <View style={ styles.viewTwoInput}>
                <CustomTextInput
                    onChangeText={(text) => this.onChangeInput(text, 'txtEmail')}
                    value={this.state.txtEmail}
                    placeholder="Email"
                />
                <CustomTextInput
                    secureTextEntry
                    onChangeText={(text) => this.onChangeInput(text, 'txtPassword')}
                    value={this.state.txtPassword}
                    placeholder="Password"
                
                />
                <CustomTextInput
                    secureTextEntry
                    onChangeText={(text) => this.onChangeInput(text, 'txtConfirm')}
                    value={this.state.txtConfirm}
                    placeholder="Confirm Password"
                />
                </View>

                <View style={styles.viewTwoSubmit}>
                    <CustomTouchable 
                        onPress={this.onSubmit} >
                        <Text style={{fontWeight: 'bold',fontSize:15}}>
                        Sign-Up
                        </Text>
                    </CustomTouchable>
                </View>
            </View>
            );
        }
    }

const styles = StyleSheet.create({
    imageStyle:{
        width:350,
        height:150,
    },
    container: {
      flex: 1,
      backgroundColor:'white',
    },
    viewTwoInput:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    viewTwoSubmit:{
        flex:1,
        alignItems:'center'
    },
  });
  export default RegisterScreens;