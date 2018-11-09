import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

class CustomTouchable extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.btn}
                //editable={this.props.isDisabled} // props
                {...this.props} // props
            />
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        width: 300,
        height: 40,
        backgroundColor:'#3796f3',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginBottom:10,
        marginTop:10
    },
});
export default CustomTouchable ;

