import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Alert, ActivityIndicator  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
import RadioForm from  'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import firebase from 'react-native-firebase';
var gender = [
    {
        label: "Male", value: 0
    },
    {
        label: "Female", value:1
    }
];
export default class AddDevice extends Component { 
    constructor(props) {
        super(props);
        this.itemRef = firebase.database();
        this.state = {
            txtName:'',
            txtAddress:'',
            txtEmail:'',
            txtPhone:'',
            date:"",
        }
    }
    onChangeInput = (text, name) =>{
        this.setState({ [name]: text});
    }
    componentDidMount(){
        this.readbyId();
      }
    readbyId = () => {
        var userId = firebase.auth().currentUser.uid;
       
        firebase.database().ref('/users/' + userId).on('value', (snapshot) =>
         {
            var object = snapshot.val();
            this.setState({
                txtName: object.name,
                txtEmail: object.email,
                txtPhone: object.phone,
                txtAddress: object.address,
                date: object.dob,
            });
        })
       
    }
    onEdit = ()=>{
        var userId = firebase.auth().currentUser.uid;
        const {txtEmail,txtAddress,txtName,txtPhone,date,gender}= this.state;
        if(txtEmail ==='' || txtAddress==='' || txtName==='' || txtPhone==='' || date ===''){
            Alert.alert(
                'Notification',
                'Save Fail',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
        }else{
        firebase.database().ref('users/'+userId).update({
            name:txtName,
            address:txtAddress,
            email:txtEmail,
            phone:txtPhone,
            dob:date,
            gender:gender
        }).then(()=>{
            Alert.alert(
                'Notification',
                'Save Success',
                [
                    {text: 'OK', onPress: () => console.log(this.props.navigation.goBack())},
                ],
                { cancelable: false }
              )
        }).catch(function(error) {
            Alert.alert(
                'Notification',
                'Save Fail',
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
        if (this.state.txtName !=='') {
            <ActivityIndicator />
        }

        return(
            <View style={ styles.container } >
                <View style ={styles.block1}>
                    <CustomHeader name="Profile" />
                </View>
                <ImageBackground
                    source={require('../../assets/backgroud1.jpg')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    >
                    <View style={styles.content}>
                        <CustomTextInput
                            onChangeText={(text) => this.onChangeInput(text, 'txtName')}
                            value={this.state.txtName}
                            placeholder="Hung Tran Van"
                        />
                        <RadioForm
                            formHorizontal={true}
                            animation={true}
                            radio_props= {gender }
                            onPress = {(value)=>{this.setState({value:value})}}
                            initial={0}
                            buttonSize={10}
                            labelStyle={{fontSize: 20, paddingHorizontal:10}}
                         />
                        
                        <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1900-05-01"
                            maxDate="2010-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                        <CustomTextInput
                            onChangeText={(text) => this.onChangeInput(text, 'txtEmail')}
                            value={this.state.txtEmail}
                            placeholder="tranhung04897@gmail.com"
                        />
                         <CustomTextInput
                            onChangeText={(text) => this.onChangeInput(text, 'txtAddress')}
                            value={this.state.txtAddress}
                            placeholder="190-Chau Thi Vinh Te"
                        />
                        <CustomTextInput
                            keyboardType="numeric"
                            onChangeText={(text) => this.onChangeInput(text, 'txtPhone')}
                            value={this.state.txtPhone}
                            placeholder="0707198133"
                        />
                        <CustomTouchable onPress={this.onEdit} >
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