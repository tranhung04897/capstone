import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
//import CustomTouchable from '../../components/CustomTouchable';
import Icon from 'react-native-vector-icons/Ionicons'; // Font Ionícs
export default class DeviceScreen extends Component {
    
onPressEdit = ()=>{
    var id = this.props.navigation.state.params.ID;
    this.props.navigation.navigate('EditDevice_Form',{ ID:id })
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
                <Icon
                    name='md-arrow-dropup-circle' size={200} color='red'
                    />
            </View>
            <View style= { styles.block2}>
                <Text>
                    <Icon name='md-arrow-dropup-circle' size={30} color='red' />-        Danger
                </Text>
                <Text>
                    <Icon name='md-arrow-dropup-circle' size={30} color='yellow' />-        Warn
                </Text>
                <Text>
                    <Icon name='md-arrow-dropup-circle' size={30} color='green' />-        Safe
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
    }
  });