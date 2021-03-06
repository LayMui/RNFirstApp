import React, { Component } from 'react';
import { Text, View , StyleSheet, StatusBar } from 'react-native';

import Reactotron from "reactotron-react-native"
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Home from './src/pages/Home';

if(__DEV__) {
  import("./ReactotronConfig")
}

Reactotron.log("HELLO WORLD")
Reactotron.display({
  name: "KNOCK KNOCK",
  preview: "Who's there?",
  value: "Orange."
})

export default class App extends Component<{}> {
 
  render() {
    return (
      <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name="Signup"
          component={Signup}
        
        />
         <Stack.Screen
          name="Home"
          component={Home}
        
        />
      </Stack.Navigator>

      
    </NavigationContainer>
       
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
