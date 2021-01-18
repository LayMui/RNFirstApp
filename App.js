import React, { Component } from 'react';
import { Text, View , StyleSheet, StatusBar } from 'react-native';

import Login from './src/pages/Login';

export default class App extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor="turquiose"
          barStyle="light-content"/>
        <Login/>
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
