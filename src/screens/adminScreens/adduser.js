import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, ImageBackground  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
//import { FirebaseConfig } from '../../components/FirebaseConfig';
import firebase from 'react-native-firebase';
class AddUser extends Component {
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
        if( this.state.txtEmail === '' || this.state.txtPassword ===''
        || this.state.txtConfirm ===''){
            Alert.alert(
                'Notification',
                'Add Fail',
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
                        'Add Success with: '+this.state.txtEmail,
                        [
                            {text: 'OK', onPress: () => console.log(this.props.navigation.goBack())},
                            
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
                        'Sign-up Fail1',
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
            <View>
                    <CustomHeader name="Register Screen" />
            </View>
            <ImageBackground
                        source={require('../../assets/backgroud1.jpg')}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                        >
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
                        Add
                        </Text>
                    </CustomTouchable>
                </View>
                </ImageBackground>
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
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingHorizontal: 5,
      },
  });
  export default AddUser;