import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class CustomHeaderAd extends Component {
    onLogout = () => {
        AsyncStorage.removeItem('TOKEN').then(() => {
            this.props.navigation.navigate('Main_Home');
        }).catch(error => {
            console.log('>> Error remove token:', error);   
        });
    }
   render() {
        const { name } = this.props;

       return (
           <View style={styles.headerStyle} >
               <Text />
               <Text style={styles.headerText}>
                   {name} 
               </Text>
               <TouchableOpacity
                   onPress={ this.onLogout}
                   style={{paddingHorizontal:10}}
               >
                   <Icon name='md-exit' size={25} />
               </TouchableOpacity>
           </View>
       )
   }
}
export const styles = StyleSheet.create({
   headerStyle:{
        height: 50,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:5,
        alignItems:'center',
        paddingHorizontal:5   
   },
   headerText:{
        fontWeight:'bold',
        fontSize:30,
        marginTop:10,
        marginBottom:10
    },
})

export default CustomHeaderAd;