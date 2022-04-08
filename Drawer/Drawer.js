import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "../Homepage/Homepage";
import Details from "../Details/Details";
import Trending from "../Trending/Trending";
import Sport from "../Sport/Sport";
import Society from "../Society/Society";
import Security from "../Security/Security";
import Contact from "../Contact/Contact";
import TabScreen from "../Tab/Tab";
import { FontAwesome5, AntDesign, FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";


const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
    const [cateogories,setCategories]=useState([]);
//  console.log(navigation);

  const category=async()=>{
    const response=await axios.get('https://tamkeenstore.com.sa/tamkeenstore/api/cat');
    const data= await response.data;
    setCategories(data)
    
  }
//   console.log(cateogories);

  useEffect(() => {
    category();
  }, [])
  
  return (
    <View>
      <TouchableOpacity
        style={{ alignItems: "flex-end", marginHorizontal: 10, marginTop: -20 }}
        onPress={() => navigation.closeDrawer()}
      >
        <FontAwesome name="close" size={25} color="white" />
      </TouchableOpacity>

      <ScrollView style={{height:500}}>
      <DrawerItem
        label="Homepage"
        labelStyle={{
          color: "white",
          textTransform: "uppercase",
          fontWeight: "600",
          fontSize: 20,
          marginTop: 80,
        }}
        onPress={() => navigation.navigate("Homepage")}
      />
      <DrawerItem
        label="Details"
        labelStyle={{
          color: "white",
          textTransform: "uppercase",
          fontWeight: "600",
          fontSize: 20,
        }}
        onPress={() => navigation.navigate("Details")}
      />
      
      {cateogories.slice(1,10).map((data)=>{
          return(
            <DrawerItem
            label={data.name}
            labelStyle={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: 20,
            }}
            onPress={() => navigation.navigate("Contact",{name:data.name})}
          />
          )
        }
        )}
        </ScrollView>
      <View style={{display:"flex"}}>
        <View
          style={{
            flexDirection:"row",
            justifyContent: "space-evenly",
            marginTop: 150,
          }}
        >
          <AntDesign name="facebook-square" size={25} color="white" />
          <FontAwesome5 name="instagram-square" size={25} color="white" />
          <FontAwesome5 name="twitter-square" size={25} color="white" />
          <AntDesign name="linkedin-square" size={25} color="white" />
        </View>
      </View>
    </View>
  );
}

function MyStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Homepage"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#e9302f",
          color: "white",
          width: "100%",
          paddingTop: 80,
        },
        drawerLabelStyle: {
          color: "white",
          textTransform: "uppercase",
          fontWeight: "600",
          fontSize: 20,
        },
        drawerType: "slide",
        drawerPosition: "right",
      }}
    >
      <Drawer.Screen
        name="Homepage"
        component={TabScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Trending"
        component={Trending}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Sport"
        component={Sport}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Society"
        component={Society}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Security"
        component={Security}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const DrawerBar = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default DrawerBar;

const styles = StyleSheet.create({});
