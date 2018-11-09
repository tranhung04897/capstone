import React,{ Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Font Ionícs

import CustomHeaderAC from '../../components/CustomHeaderAc';

class AccountScreen extends Component {
    state = { 

    }
    
    onAddIcon = () =>{
        this.props.navigation.navigate('Device_Form');
    }
    render() {
        return (
            <View style={styles.container}>
                <View >
                    <CustomHeaderAC name="Account Screen" />
                </View>
                <ImageBackground
                        source={require('../../assets/backgroud1.jpg')}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                        >
                    <View style={styles.block2}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Your Device(s):</Text>
                        <TouchableOpacity
                            onPress={ this.onAddIcon}
                        >
                            <Icon name='md-add-circle' size={50} />
                        </TouchableOpacity>
                        
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingHorizontal: 5,
      },
    block2:{
        flex:1
    },
});

export default AccountScreen;