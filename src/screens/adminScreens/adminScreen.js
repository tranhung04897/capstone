import React, { Component} from 'react';
import { FlatList, View, StyleSheet, Text, ImageBackground, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import CustomHeaderAC from '../../components/CustomHeaderAc';
import Icon from 'react-native-vector-icons/Ionicons'; // Font Ionícs
import firebase from 'react-native-firebase';
class AdminScreen extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebase.database().ref('/users/');
        this.state ={
            mang:[],
        }
    }
    keyExtractor = (item) => {
        item.id;
    }
    
    renderItem = ({item}) =>
    <View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('InforUser_Form',{ ID:item.key })}} >
        <View style={styles.box}>
        <Icon name='md-aperture' size={30} />
            <Text style={{fontWeight:'bold'}}>
                Name: {item.name}
            </Text>
            <Text style={{fontWeight:'bold'}}>
                Address: {item.address}
            </Text>
            <Text style={{fontWeight:'bold'}}>
                Dob: {item.dob}
            </Text>
            <Text style={{fontWeight:'bold'}}>
                Phone: {item.phone}
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
                address: data.val().address,
                dob:data.val().dob,
                email:data.val().email,
                phone:data.val().phone,
            });
            });
            this.setState({mang: items});
        });
        }
        
    onAddIcon = () =>{
        this.props.navigation.navigate('AddUser_Form');
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
                        <TouchableOpacity 
                        onPress={this.onAddIcon}
                        style={styles.btn}>
                            <Text>ADD</Text>
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
const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        width:140,
        height:150,
        backgroundColor:'white',
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