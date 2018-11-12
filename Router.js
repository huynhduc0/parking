import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import Home from './screen/Home';
import Sale from './screen/Sale';
import SlideMenu from './screen/SlideMenu';
import User from './screen/User';
const style= StyleSheet.create({
    navBar: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'green'
      },
      rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red',
      },
      rightIcon: {
        height: 18,
        width: 18,
        alignContent: "flex-end",
        backgroundColor: 'white',
      },
      icon: {
        width: 24,
        height: 24,
      },
})

export const HomeStack= createStackNavigator({
    HomeScreen:{
        screen:Home,
    },
    MenuScreen:{
        screen:SlideMenu,
        navigationOptions:{
            title:'Tùy chọn'
        }
    },
    UserScreen:{
        screen:User,
        navigationOptions:{
            title:'Tài khoản'
        }
    },
    SaleScreen:{
        screen:Sale,
        navigationOptions:{
            title:'Cho thuê chỗ'
        }
    }
})
export const Menu= DrawerNavigator({
    Tìm:{
        screen:HomeStack
    },
    Menu:{
        screen: SlideMenu,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
              <Image
                source={require('./assets/images/notification_logo.png')}
                style={[style.icon, {tintColor: tintColor}]}
              />
            ),
            }
    }
})