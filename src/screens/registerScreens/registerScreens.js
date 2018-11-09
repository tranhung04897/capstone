import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
//import { FirebaseConfig } from '../../components/FirebaseConfig';

class RegisterScreens extends Component {
    
        state = {
            txtEmail:'',
            txtPhone:'',
            txtConfirm:'',
            txtName:'',
            txtPassword:'',
        }
    onChangeInput = (text, name) => {
        this.setState({ [name]: text});
    }
    onSubmit = () => {
        
    }
    render() {
        return (
            <View style={ styles.container } >
            <CustomHeader name="Register Screen" />
            <View style={ styles.viewTwoInput}>
                <CustomTextInput
                    onChangeText={(text) => this.onChangeInput(text, 'txtName')}
                    value={this.state.txtName}
                    placeholder="Username"
                />
                <CustomTextInput
                    onChangeText={(text) => this.onChangeInput(text, 'txtEmail')}
                    value={this.state.txtEmail}
                    placeholder="Email"
                />
                <CustomTextInput
                    keyboardType="numeric"
                    onChangeText={(text) => this.onChangeInput(text, 'txtPhone')}
                    value={this.state.txtPhone}
                    placeholder="Phone"
                />
                <CustomTextInput
                    secureTextEntry
                    onChangeText={(text) => this.onChangeInput(text, 'txtPassword')}
                    value={this.state.txtPassword}
                    placeholder="Password"
                
                />
                <CustomTextInput
                    secureTextEntry
                    onChangeText={(text) => this.onChangeInput(text, 'txtConfirm')}
                    value={this.state.txtConfirm}
                    placeholder="Confirm Password"
                />
                </View>

                <View style={styles.viewTwoSubmit}>
                    <CustomTouchable 
                        onPress={this.onSubmit} >
                        <Text style={{fontWeight: 'bold',fontSize:15}}>
                        Sign-Up
                        </Text>
                    </CustomTouchable>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        width:350,
        height:150,
    },
    container: {
      flex: 1,
      backgroundColor:'white'
    },
    viewTwoInput:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    viewTwoSubmit:{
        flex:1,
        alignItems:'center'
    },
  });
  export default RegisterScreens;