import React, { Component } from 'react';
import { Text, View , StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default class Form extends Component<{}> {
  render() {
    return (
         <View style={styles.container}>
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Email"
        placeholderTextColor = 'white'
       />
       <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Password"
        placeholderTextColor = 'white'
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
       </View>
       
      );
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
    }, 
    button: {
        width: 150, 
        height: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25, 
        marginVertical: 10,
        alignItems: 'center'
    }, 
    buttonText: {
        fontSize: 16, 
        fontWeight: '500', 
        color: 'white', 
        textAlign: 'center', 
       
    },
    inputBox: {
      width: 300,
      height: 50,
      color: 'white', 
      marginVertical: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 15, 
      paddingHorizontal: 20
    }
  });
  