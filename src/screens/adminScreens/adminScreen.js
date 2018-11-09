import React, { Component} from 'react';
import {View, ListView, StyleSheet, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import CustomHeaderAC from '../../components/CustomHeaderAc';
class AdminScreen extends Component {
    constructor(props) {
        super(props);

        data = [];
        for( let i=0; i< 10; i++){
            data.push(i);
        }
        const ds = new ListView.DataSource({ rowHasChanged:(r1,r2) =>r1 !== r2 });
        this.state = {
            dataSource:ds.cloneWithRows(data),
        }
    }
    _renderRow(data){
        return(
            <View style= {styles.box}>
                <Text>{data}</Text>
            </View>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                 <View>
                    <CustomHeaderAC name="Admin Screen" />
                </View>
                <ImageBackground
                        source={require('../../assets/backgroud1.jpg')}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                        >
                    <View style={styles.block2} >   
                        <TextInput style={styles.searchbox}
                            placeholder='Search box' />
                        <TouchableOpacity style={styles.btn}>
                            <Text>ADD</Text>
                        </TouchableOpacity>
                        <ListView
                            renderRow={ this._renderRow.bind(this) }
                            dataSource={ this.state.dataSource }
                            contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}
                            pageSize= {data.lenght}
                        />
                    </View> 
                </ImageBackground>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        width:120,
        height:100,
        backgroundColor:'gray',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    block2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    searchbox:{
        width: 300,
        height: 40,
        marginVertical:10,
        borderRadius:10, 
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor:'#f4f7fb'
        
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingHorizontal: 5,
      },
    btn: {
        width: 100,
        height: 40,
        backgroundColor:'#3796f3',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginBottom:10,
        marginTop:10
    },
});
export default AdminScreen;