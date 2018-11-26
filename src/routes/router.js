import React from 'react';
import { createStackNavigator, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Login from '../screens/loginScreens/loginScreen';
import Register from '../screens/registerScreens/registerScreens';
import Account from '../screens/accountScreens/accountScreen';
import AddDevice from '../screens/accountScreens/adddeviceScreen'
import Menu from '../screens/accountScreens/menuAccount';
import ChangePass from '../screens/accountScreens/changepassScreen';
import Editprofile from '../screens/accountScreens/editprofileScreen';
import Infoprofile from '../screens/accountScreens/inforaccScreen';
import InforUser from '../screens/adminScreens/inforuserScreen';
import AddUser from '../screens/adminScreens/adduser';
import CheckAuthRouter from './CheckAuthRouter';
import Admin from '../screens/adminScreens/adminScreen';
import Devices from '../screens/deviceScreens/deviceScreen';
import EditDevice from '../screens/deviceScreens/editDeviceScreen'
import ViewStatus from '../screens/deviceScreens/viewScreen';
export const AuthStack = createStackNavigator({ 
    Main_Home: {
        screen: Login,
        navigationOptions: {
            title:'Sign-In'
        },
    },
    Register_Form: {
        screen: Register,
        navigationOptions: {
            title:'Sign-Up'
        }
    },
}, {
    headerMode: 'none',
});
export const SlideMenu = createDrawerNavigator({
    Account_Form:{
        screen:Account,
    },
    Admin_Form:{
        screen:Admin,
    }
},
    {
        drawerWidth:300,
        drawerPosition:'right',
        drawerBackgroundColor:'rgba(0,0,0,0.5)',
        contentComponent: props => <Menu {...props}/>
    }
); 
export const Tabbar = createBottomTabNavigator({
    Home_device:{
        screen: Devices,
        navigationOptions:{
            tabBarLabel:'Home Device'
        }
    },
    View_status:{
        screen:ViewStatus,
        navigationOptions:{
            tabBarLabel:'View Daily'
        }
    },
},{
    tabBarOptions:{
        style:{
            justifyContent:'center',
            backgroundColor:'#dddddd',
        },
        activeTintColor:'blue',
    },
});
export const HomeStack = createStackNavigator({   
    SlideMenu:{
        screen:SlideMenu
    },
    AddDevice_Form: {
        screen: AddDevice,
    },
    ChangePass_Form: {
        screen: ChangePass,
    },
    Editprofile_Form: {
        screen: Editprofile,
    },
    Infoprofile_Form: {
        screen: Infoprofile,
    },
    Device_Form:{
        screen:Tabbar,
    },
    EditDevice_Form:{
        screen:EditDevice,
    },
    InforUser_Form: {
        screen:InforUser
    },
    AddUser_Form:{
        screen:AddUser
    }
}, {
    headerMode: 'none',
    //initialRouteName: 'Account_Form'
});
export const CheckAuth = createSwitchNavigator({
    LoadingCheck: {
        screen: CheckAuthRouter,
    },
    HomeStack: {
        screen: HomeStack,
    },
    AuthStack: {
        screen: AuthStack,
    },
}, {
    // initialRouteName: 'AuthStack'
});

