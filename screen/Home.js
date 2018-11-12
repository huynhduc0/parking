import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class NotificationLogo extends React.Component {
    render() {
      return (
          <View>
            <Text>TÌm thôi!</Text>
        </View>
      );
    }
  }
export default class Home extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
    title:'Đặt nào!',
    headerTitle: <NotificationLogo />,
    headerLeft: (
       <View>
       <TouchableOpacity onPress={()=>
            navigation.openDrawer()
       }>
            <Image source={require('../assets/images/menu.png')}
                style={{width:27, height:27}}
            />
       </TouchableOpacity>
         
       </View> 
      ),
      headerRight: (
        <TouchableOpacity onPress={()=>
            navigation.navigate('UserScreen')
       }>
            <Image source={require('../assets/images/notification_logo.png')}
                style={{width:24, height:24}}
            />
       </TouchableOpacity>
      ),
    }
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems: "center", backgroundColor:'#fff'}}>
        <Text> Home nè hihi </Text>
        <TouchableOpacity style={{backgroundColor: 'green',  }} 
            onPress={()=>{
                this.props.navigation.navigate('SaleScreen')
            }}>
            <Text style={{padding: 18, radious: 2}}> Nhảy qua sale cái nhẹ nè </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}
