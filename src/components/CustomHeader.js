import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
class CustomHeader extends Component {
   goBack = () => {
       this.props.navigation.goBack();
   }
   openDrawer = () => {
       this.props.navigation.openDrawer();
   } 
   render() {
        const { name } = this.props;

       return (
           <View style={styles.headerStyle} >
               <TouchableOpacity
                   onPress={this.goBack}
                   style={{paddingHorizontal:10}}
               >
                   <Icon name='md-arrow-round-back' size={25} />
               </TouchableOpacity>
               <Text style={styles.headerText}>
                   {name} 
               </Text>
               <Text></Text>
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

export default withNavigation(CustomHeader);