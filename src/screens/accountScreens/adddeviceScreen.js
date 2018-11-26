import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Alert, alert  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
import firebase from 'react-native-firebase';
export default class AddDevice extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebase.database();
        this.state ={
            txtID:'',
            txtName:'',
        }
    }
    onChangeInput = (text, name) =>{
        this.setState({ [name]: text});
    }
    onSubmit = () => {
        var userId = firebase.auth().currentUser.uid;
        const { txtID, txtName }= this.state;
        if( this.state.txtID === '' || this.state.txtName ===''){
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
            firebase.database().ref('devices/'+userId).push({
                name:txtName,
                id:txtID
            })
            .then(()=>{
                Alert.alert(
                    'Notification',
                    'Add Success with ID: '+this.state.txtID,
                    [
                        {text: 'OK', onPress: () => console.log(this.props.navigation.navigate('Account_Form'))},
                        
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
                    'Add  Fail',
                    [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    ],
                    { cancelable: false }
                )
            });
          
        }
    }
    render(){
        return(
            <View style={ styles.container } >
                <View style ={styles.block1}>
                    <CustomHeader name="Add Device" />
                </View>
                <ImageBackground
                    source={require('../../assets/backgroud1.jpg')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    >
                    <View style={styles.content}>
                        <CustomTextInput 
                            onChangeText={(text) => this.onChangeInput(text, 'txtID')}
                            value={this.state.txtID}
                            placeholder="Enter ID"
                        />
                        <CustomTextInput
                            onChangeText={(text) => this.onChangeInput(text, 'txtName')}
                            value={this.state.txtName}
                            placeholder="Name of Device"
                        
                        />
                        <CustomTouchable 
                        onPress={this.onSubmit} >
                            <Text style={{fontWeight: 'bold',fontSize:15}}>ADD</Text>
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