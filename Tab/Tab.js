import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Newsfeed from '../NewsFeed.js/Newsfeed';
import Home from '../Components/Home';
import Account from '../Account/Account';
import {  FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();


const TabScreen = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="HOME"
      backBehavior='initialRoute'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HOME") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "ACCOUNT") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "NEWS FEED") {
            iconName = focused ? "list-alt" : "list-alt";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="NEWS FEED"
        component={Newsfeed}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ACCOUNT"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
 
  )
}

export default TabScreen

const styles = StyleSheet.create({})