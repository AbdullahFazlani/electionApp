import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../Homepage/Homepage';
import Details from '../Details/Details';
import Trending from '../Trending/Trending';
import Sport from '../Sport/Sport';
import Society from '../Society/Society';
import Security from '../Security/Security';
import Contact from '../Contact/Contact';
import DrawerBar from '../Drawer/Drawer';


const Stack = createStackNavigator();

function MyStack() {
    return (

      <>
      <Stack.Navigator>
        
          <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}}/>
          <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
          <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}}/>
        
      </Stack.Navigator>
        
      </>
    );
  }

const Home = () => {
  return (
    <MyStack />
  )
}

export default Home

const styles = StyleSheet.create({})