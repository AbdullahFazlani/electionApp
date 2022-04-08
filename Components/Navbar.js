import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation =useNavigation();
  const [cateogories,setCategories]=useState([]);
//  console.log(navigation);

  const category=async()=>{
    const response=await axios.get('https://tamkeenstore.com.sa/tamkeenstore/api/cat');
    const data= await response.data;
    setCategories(data)
    
  }
  // console.log(cateogories);

  useEffect(() => {
  category();
  }, [])
  

  return (
    <View>
      <ScrollView style={styles.container} horizontal>
       
       
        <Pressable style={styles.NavView} onPress={()=>navigation.navigate('Homepage')} >
          <Text style={styles.NavText}>Home</Text>
        </Pressable>

        <Pressable
          style={{ flex: 1, justifyContent: "center", alignItems: "center", marginRight:5 }}
          onPress={()=>navigation.navigate('Details')}
        >
          <Text style={styles.NavText}>Details</Text>
        </Pressable>

          {cateogories.map((data)=>{
            return(
            <Pressable style={styles.NavView} onPress={()=>navigation.navigate('Contact',{name:data.name})} >
            <Text style={styles.NavText}>{data.name}</Text>
          </Pressable>
            )
          }
          )}

        {/* <Pressable style={styles.NavView}  onPress={()=>navigation.navigate('Trending')}>
          <Text style={styles.NavText}>Trending</Text>
        </Pressable>

        <Pressable style={styles.NavView}  onPress={()=>navigation.navigate('Sport')}>
          <Text style={styles.NavText}>Sport</Text>
        </Pressable>

        <Pressable style={styles.NavView}  onPress={()=>navigation.navigate('Society')}>
          <Text style={styles.NavText}>Society</Text>
        </Pressable>

        <Pressable style={styles.NavView}  onPress={()=>navigation.navigate('Security')}>
          <Text style={styles.NavText}>Security</Text>
        </Pressable>

        <Pressable style={styles.NavView}  onPress={()=>navigation.navigate('Contact')}>
          <Text style={styles.NavText}>Contact</Text>
        </Pressable> */}
      </ScrollView>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f83ad",
    display: "flex",
    height: 50,
    flexDirection: "row",
    padding: 10,
  },
  NavView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:10
  },
  NavText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 20,
    transform: [{scaleY:1.2}]
  },
});
