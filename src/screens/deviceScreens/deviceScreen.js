import React, { Component } from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, Alert   } from 'react-native';
//import CustomTouchable from '../../components/CustomTouchable';
import Icon from 'react-native-vector-icons/Ionicons'; // Font Ionícs
import firebase from 'react-native-firebase';
import  { Notification, NotificationOpen } from 'react-native-firebase';

export default class DeviceScreen extends Component {
    constructor(props) {
        super(props);
        var id = this.props.navigation.state.params.ID;
        this.itemRef = firebase.database().ref('/DATA/'+id);
        this.state ={
            dulieu:'',
            icon:'safety.jpg',
            txtWarning:''
        }
    }
    
    async componentDidMount() {
        this.listenForItems(this.itemRef);
    
    };

    listenForItems = (itemsRef)=> {
       
        itemsRef.child('status').on('value', (snapshot) =>
        {
            var object = snapshot.val();
            if(object < 400 ){
                this.setState({
                    dulieu: object,
                    icon:'blue',
                    txtWarning:'Safe'
                });
            }if( object > 400 && object < 600){
                this.setState({
                    dulieu: object,
                    icon:'yellow',
                    txtWarning:'Warning'
                });
            }
            if(object > 600) {
                this.setState({
                    dulieu: object,
                   icon:'red',
                    txtWarning:'Danger'
                });
            }
        });
        }

    onPressEdit = ()=>{
        var KEY = this.props.navigation.state.params.KEY;
        this.props.navigation.navigate('EditDevice_Form',{ ID:KEY })
    }

    render() {
        return (
            <View style={ styles.container } >
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text></Text>
                    
                    <TouchableOpacity onPress={this.onPressEdit}>
                        <Icon name='md-alert' size={30} /> 
                        
                    </TouchableOpacity>
                </View>
                <View style= { styles.block1} >
                <View style={{width:180,height:180,borderRadius:180,borderColor:'black',backgroundColor:this.state.icon, justifyContent:'center',alignItems: 'center',}}>
                    <Text style={{fontSize:40,fontWeight:'bold'}}>{this.state.txtWarning}</Text>
                    <Text style={{fontSize:30,fontWeight:'bold'}}>{this.state.dulieu}</Text>
                </View>
                </View>
                <View style= { styles.block2}>
                    <Text>
                        <Icon name='md-arrow-dropup-circle' size={30} color='red' />-        Danger
                    </Text>
                    <Text>
                        <Icon name='md-arrow-dropup-circle' size={30} color='yellow' />-        Warn
                    </Text>
                    <Text>
                        <Icon name='md-arrow-dropup-circle' size={30} color='blue' />-        Safe
                    </Text>
                </View>
            </View>
            );
        }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    block1: {
        flex:3,
        borderBottomColor:'black',
        borderBottomWidth:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    block2:{
        flex:1,
        justifyContent:'center',
        alignItems: 'flex-start',
    },
    box:{
        width:140,
        height:150,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
  });