import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, ActivityIndicator, Alert  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
import firebase from 'react-native-firebase';
export default class AddDevice extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebase.database();
        this.state ={
            txtCurrent:'',
            txtNew:'',
            txtCfnew:'',
        }
    }
    componentDidMount(){
        this.readbyId();
      }
    readbyId = () => {
        var userId = firebase.auth().currentUser.email;
        this.setState({
            txtCurrent:userId
        })
    }
    onSubmit1 = () => {
        if(this.state.txtNew ==='' || this.state.txtCfnew ==='' ){
            Alert.alert(
                'Notification',
                ' Please do not empty',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
        }else {
            if(this.state.txtNew !== this.state.txtCfnew  ){
                Alert.alert(
                    'Notification',
                    'Password not match ',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                  )
            }else{
                var user = firebase.auth().currentUser;
                var newPassword = this.state.txtNew;
                user.updatePassword(newPassword).then(()=>{
                    Alert.alert(
                        'Notification',
                        'Change Password Success with account: '+this.state.txtCurrent,
                        [
                            {text: 'OK', onPress: () => console.log(this.props.navigation.navigate('Account_Form'))},
                            
                        ],    
                    )
                    this.setState({
                        txtCfnew:'',
                        txtNew:'',
                    });
                }).catch(function(error) {
                    Alert.alert(
                        'Notification',
                        ' Fail',
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
   /* onSubmit = () =>{
      var auth = firebase.auth();
      var userId = firebase.auth().currentUser.email;
      auth.sendPasswordResetEmail(userId).then(() => {
        Alert.alert(
            'Success',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
      }).catch(function(error) {
        // An error happened.
      });
    }*/
    onChangeInput = (text, name) =>{
        this.setState({ [name]: text});
    }
    
    render(){
        if (this.state.txtCurrent !=='') {
            <ActivityIndicator />
        }
        return(
            <View style={ styles.container } >
                <View style ={styles.block1}>
                    <CustomHeader name="Change PassWord" />
                </View>
                <ImageBackground
                    source={require('../../assets/backgroud1.jpg')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    >
                    <View style={styles.content}>
                        <CustomTextInput
                            onChangeText={(text) => this.onChangeInput(text, 'txtCurrent')}
                            value={this.state.txtCurrent}
                    
                        />
                        <CustomTextInput
                            secureTextEntry
                            onChangeText={(text) => this.onChangeInput(text, 'txtNew')}
                            value={this.state.txtNew}
                            placeholder="New Password"
                    
                        />
                        <CustomTextInput
                            secureTextEntry
                            onChangeText={(text) => this.onChangeInput(text, 'txtCfnew')}
                            value={this.state.txtCfnew}
                            placeholder="Confirm New Password"
                    
                        />
                        <CustomTouchable 
                            onPress={this.onSubmit1} >
                            <Text style={{fontWeight: 'bold',fontSize:15}}>SAVE</Text>
                        </CustomTouchable>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingHorizontal: 5,
      },
    container: {
      flex: 1,
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
  });