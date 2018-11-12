import React, {Component} from 'react';
import { StyleSheet, Text, View,Image,Touchable, StatusBar,Navigator } from 'react-native';
import { Menu }  from './Router'
export default class App extends React.Component {
  render () {
    return (
      <Menu/>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'yellow',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
