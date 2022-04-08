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
  import { FontAwesome, Feather, SimpleLineIcons,Fontisto } from "@expo/vector-icons";

const Signup = ({navigation}) => {
    const [input, setInput] = useState("");

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/LoginBg.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.LoginText}>Signup</Text>
          <View style={styles.sectionStyle}>
            <FontAwesome
              name="user-o"
              style={styles.imageStyle}
              size={30}
              color="grey"
            />
            <TextInput
              style={{ flex: 1, paddingLeft: 10 }}
              placeholder="Username"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.sectionStyle}>
            <Fontisto
              name="email"
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
          <View style={styles.sectionStyle}>
            <SimpleLineIcons
              name="lock"
              style={styles.imageStyle}
              size={30}
              color="grey"
            />
            <TextInput
              style={{ flex: 1, paddingLeft: 10 }}
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
            />
          </View>
  
          <TouchableOpacity style={styles.buttonSectionStyle}>
            <Text style={{ color: "white", fontSize: 20 }}>Signup</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={{ marginTop: 10 ,marginHorizontal:70}}>
            <Text style={{ color: "white", fontSize: 11,textAlign:"center" }}>
              By Signing up, You accept our Terms of Services and Privacy Policy
            </Text>
          </TouchableOpacity>
  
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 150,
              marginHorizontal: 30,
            }}
          >
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "#d53437",
                width: "20%",
                flex: 1,
              }}
            ></View>
            <View style={{ marginHorizontal: 15 }}>
              <Text style={{ color: "#d53437", fontSize: 15 ,transform:[{translateY:6}]}}>
                Connect with us?
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "#d53437",
                width: "20%",
                flex: 1,
              }}
            ></View>
          </View>
  
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 50,
              marginHorizontal: 20,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection:"row",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "#0f83ad",
                borderWidth: 0.5,
                borderColor: "transparent",
                height: 40,
                borderRadius: 40,
                width: "100%",
                marginHorizontal:5
              }}
            >
                              <FontAwesome name="facebook-square" size={30} color="white"/>
              <Text style={{ color: "white", fontSize: 15 }}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection:"row",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "#d53437",
                borderWidth: 0.5,
                borderColor: "transparent",
                height: 40,
                borderRadius: 40,
                width: "100%",
                marginHorizontal:5
              }}
            >
                <FontAwesome name="twitter-square" size={30} color="white"/>
              <Text style={{ color: "white", fontSize: 17 }}>Twitter</Text>
            </TouchableOpacity>
          </View>
  
      <View style={{display:"flex",flexDirection:"row",marginVertical:30}}>
              <View >
                  <Text style={{color:"#0f83ad",fontWeight:"bold"}}>
                     Already Have an Account?
                  </Text>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                  <Text style={{color:"#d53437",fontWeight:"bold",marginHorizontal:5,fontSize:14}}>
                      Back to Login
                  </Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        alignItems: "center",
      },
      LoginText: {
        marginTop: 50,
        fontSize: 30,
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
        marginTop: 20,
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