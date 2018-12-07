import React,{ Component } from 'react';
import { FlatList,StyleSheet, View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Font Ionícs

import CustomHeaderAC from '../../components/CustomHeaderAc';
import firebase from 'react-native-firebase';
class AccountScreen extends Component {
    constructor(props) {
        super(props);
        var userId = firebase.auth().currentUser.uid;
        this.itemRef = firebase.database().ref('/devices/'+userId);
        this.state ={
            mang: [],
        }
    }
    keyExtractor = (item) => {
        item.id;
    }
    renderItem = ({item}) =>
        <View>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Device_Form',{ ID:item.id, KEY:item.key })}} >
            <View style={styles.box}>
            <Icon name='md-aperture' size={30} />
                <Text style={{fontWeight:'bold'}}>
                    Name: {item.name}
                </Text>
                <Text style={{fontWeight:'bold'}}>
                    ID: {item.id}
                </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{this.itemRef.child(item.key).remove()}}
             >
                <View style={{
                    width:140,
                    height:20,
                    backgroundColor:'#3796f3',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:10,
                    marginVertical:10}}>
                        <Text>Xóa</Text>
                </View>
            </TouchableOpacity>
        </View>;
    listenForItems = (itemsRef)=> {
        itemsRef.on('value', (snap) => {
          var items = [];
          snap.forEach((data) => {
            items.push({
              key: data.key,
              name: data.val().name,
              id: data.val().id
            });
          });
          this.setState({mang: items});
        });
      }
      
    
    onDevices(item){
        this.props.navigation.navigate('Device_Form',{ ID:item.key })
    }
    onAddIcon = () =>{
        this.props.navigation.navigate('AddDevice_Form');
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
                        <FlatList
                        data = {this.state.mang}
                        keyExtractor = {this.keyExtractor}
                        renderItem = {this.renderItem}
                        style={{marginTop: 20}}
                        horizontal={false}
                        numColumns={2}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
    componentDidMount() {
        this.listenForItems(this.itemRef);
      };
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
    box:{
        width:140,
        height:120,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
});

export default AccountScreen;