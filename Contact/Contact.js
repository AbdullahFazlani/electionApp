import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';

const Contact = ({route,navigation}) => {
    const {name}=route.params;
    console.log(name);
  return (

    <View>
        <Header/>
        <Navbar/>
      <Text style={{textAlign:"center",marginVertical:20,fontSize:20}}>{name}</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})