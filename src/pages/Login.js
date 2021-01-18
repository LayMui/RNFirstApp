import React, { Component } from 'react';
import { Text, View , StyleSheet , TextInput} from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';

export default class Login extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
        <Logo/>
        <Form/>
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
    },
    inputBoc: {
      width: 300,

    }
  });
  