import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Alert  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
import firebase from 'react-native-firebase';

export default class EditDevice extends Component { 
    constructor(props) {
        super(props);
        this.itemRef = firebase.database();
        this.state = {
            name:'',
            id:'',
            key:this.props.navigation.state.params.ID,
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
        firebase.database().ref('/devices/' + userId).child(this.state.key).on('value', (snapshot) =>
         {
            var object = snapshot.val();
            this.setState({
                name: object.name,
                id: object.id,
            });
        })
    }
    onSubmit = () => {
        var userId = firebase.auth().currentUser.uid;
        const {name, id}= this.state;
        if(name ==='' || id===''){
            Alert.alert(
                'Save Fail',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }else{
        firebase.database().ref('devices/'+userId).child(this.state.key).update({
            name:name,
            id:id,
        }).then(()=>{
            Alert.alert(
                'Save Success',
                [
                    {text: 'OK', onPress: () => console.log(this.props.navigation.goBack())},
                ],
                { cancelable: false }
              )
        }).catch(function(error) {
            Alert.alert(
                'Save Fail',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
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
                    <CustomHeader name="Edit Sensor" />
                </View>
                <ImageBackground
                    source={require('../../assets/backgroud1.jpg')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    >
                    <View style={styles.content}>
                        <CustomTextInput
                            onChangeText={(text) => this.onChangeInput(text, 'name')}
                            value={this.state.name}
                        />
                        
                        <CustomTextInput
                            onChangeText={(text) => this.onChangeInput(text, 'id')}
                            value={this.state.id}
                        />
                         
                        <CustomTouchable onPress={this.onSubmit} >
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