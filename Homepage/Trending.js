import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trending = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:2,justifyContent:"center",transform: [{ translateX: -13 }]}}>
        <Image source={require("../assets/trending.png")}  />
      </View>
      <View style={{flex:4}}>
      <Text>Trending</Text>
      </View>
      <View style={{flex:2}}>
      <Text>Trending</Text>
      </View>
    </View>
  )
}

export default Trending

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:50,
        marginTop:60,
       margin:20,
       display: "flex",
       flexDirection:"row"
    }
})