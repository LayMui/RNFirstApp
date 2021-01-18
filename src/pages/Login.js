import React, { Component } from 'react';
import { Text, View , StyleSheet } from 'react-native';

import Logo from '../components/Logo';

export default class Login extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
        <Logo/>
        
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
  