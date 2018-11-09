import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
export default class AddDevice extends Component {
    state ={
        txtCurrent:'',
        txtNew:'',
        txtCfnew:'',
    }
    onChangeInput = (text, name) =>{
        this.setState({ [name]: text});
    }
    
    render(){
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
                            secureTextEntry
                            onChangeText={(text) => this.onChangeInput(text, 'txtCurrent')}
                            value={this.state.txtCurrent}
                            placeholder="Current Password"
                    
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
                        <CustomTouchable  >
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