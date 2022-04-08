import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './Welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';
import Forget from './Forget';
import Reset from './Reset';
import Changes from './Changes';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
      <Stack.Screen name="Forget" component={Forget} options={{headerShown: false}}/>
      <Stack.Screen name="Reset" component={Reset} options={{headerShown: false}}/>
      <Stack.Screen name="Changes" component={Changes} options={{headerShown: false}}/>
     
    </Stack.Navigator>
  );
}

const Account = () => {
  return (
    // <NavigationContainer>
    <MyStack />
//   </NavigationContainer>
  )
}

export default Account

const styles = StyleSheet.create({})