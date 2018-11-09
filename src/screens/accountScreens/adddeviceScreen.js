import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
export default class AddDevice extends Component {
    state ={
        txtID:'',
        txtName:'',
    }
    onChangeInput = (text, name) =>{
        this.setState({ [name]: text});
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
                        <CustomTouchable  >
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