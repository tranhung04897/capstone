import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class CustomTextInput extends Component {
    render() {
        return (
            <TextInput
                style={styles.input}
                //editable={this.props.isDisabled} // props
                {...this.props} // props
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
      width: 300,
      height: 40,
      marginBottom: 10,
      borderRadius:10, 
      borderColor: 'gray', 
      borderWidth: 1,
      backgroundColor:'#f4f7fb'
    },
  });
  
export default CustomTextInput;
