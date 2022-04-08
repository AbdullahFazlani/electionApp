import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { FontAwesome, Feather, SimpleLineIcons } from "@expo/vector-icons";
const Forget = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground
      source={require("../assets/LoginBg.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <Text style={styles.LoginText}>Forget Password</Text>
      <View style={{marginVertical:10,marginHorizontal:60}}>
          <Text style={{color:"white",textAlign:"center"}}>
              Enter Your email address here so we sent you the link to reset your password
          </Text>
      </View>
      <View style={styles.sectionStyle}>
        <FontAwesome
          name="user-o"
          style={styles.imageStyle}
          size={30}
          color="grey"
        />
        <TextInput
          style={{ flex: 1, paddingLeft: 10 }}
          placeholder="Email"
          underlineColorAndroid="transparent"
        />
      </View>
     
      <TouchableOpacity style={styles.buttonSectionStyle} onPress={()=>navigation.navigate("Reset")}>
        <Text style={{ color: "white", fontSize: 20 }}>Verify</Text>
      </TouchableOpacity>

      

     
    </ImageBackground>
  </View>
  )
}

export default Forget

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        alignItems: "center",
      },
      LoginText: {
        marginTop: 70,
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
      },
      sectionStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "#000",
        height: 50,
        borderRadius: 10,
        // margin: 50,
        marginTop: 10,
        width: "65%",
      },
      buttonSectionStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f83ad",
        borderWidth: 0.5,
        borderColor: "#000",
        height: 50,
        borderRadius: 10,
        // margin: 50,
        marginTop: 20,
        width: "65%",
      },
      imageStyle: {
        margin: 5,
        // height: 25,
        // width: 25,
        resizeMode: "stretch",
        alignItems: "center",
      },
})