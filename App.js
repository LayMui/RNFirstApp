import React, { Component } from 'react';
import { Text, View , StyleSheet, StatusBar } from 'react-native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

export default class App extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor="blue"
          barStyle="light-content"/>
        <Login/>
        <Signup/>
        </View>
      );
    };
  }


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64', 
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  }, 
  text: {
    color: 'black', 
    fontSize: 40
  }
});
