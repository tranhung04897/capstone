import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions  } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomTextInput';
import CustomTouchable from '../../components/CustomTouchable';
import Icon from 'react-native-vector-icons/Ionicons';
import RadioForm from  'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
var gender = [
    {
        label: "Male", value: 0
    },
    {
        label: "Female", value:1
    }
];
export default class AddDevice extends Component {
    static navigationOptions = {
        drawerICon:(
            <Icon name='md-add-circle' size={25} />
        )
    }
    state ={
        txtName:'',
        txtAddress:'',
        txtEmail:'',
        txtPhone:'',
        date:"1997-08-04",
    }
    onChangeInput = (text, name) =>{
        this.setState({ [name]: text});
    }
    
    render(){
        return(
            <View style={ styles.container } >
                <View style ={styles.block1}>
                    <CustomHeader name="Edit Profile" />
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