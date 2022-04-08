import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const Changes = ({ navigation }) => {
  const [image, setImage] = useState("");

  return (
    <ScrollView>
      <Header />
      <Navbar />
     
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginRight:20,
          transform: [{translateY:18}]
        }}
        onPress={()=>navigation.navigate("Welcome")}
      >
        <FontAwesome name="close" size={25} color="#d53437" />
      </TouchableOpacity>

      {image === "" ? (
        <View
          style={{
            borderWidth: 1,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 50,
            marginTop:40
          }}
        >
          <FontAwesome name="user-circle-o" size={80} color="#d53437" />
        </View>
      ) : (
        <View></View>
      )}
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "700",
            color: "#d53437",
          }}
        >
          Abdullah Fazlani
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "600",
            color: "gray",
            marginTop: 5,
          }}
        >
          userID: 78518374
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "600",
            color: "gray",
            marginTop: 5,
            marginBottom: 30,
          }}
        >
          abdullahfazlani5@gmail.com
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 15,
          marginBottom: 15,
          backgroundColor: "white",
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      >
        <View style={{ flex: 9, marginVertical: 10, marginLeft: 25 }}>
          <Text>First Name</Text>
        </View>
        <View style={{ flex: 2, marginLeft: -25, marginTop: 5 }}>
          <Text style={{ fontSize: 20, color: "grey" }}>|</Text>
        </View>
        <View style={{ flex: 9, marginVertical: 5 }}>
          <TextInput style={{ color: "#d53437", fontWeight: "700" }} >Abdullah</TextInput>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 15,
          marginBottom: 15,
          backgroundColor: "white",
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      >
        <View style={{ flex: 9, marginVertical: 10, marginLeft: 25 }}>
          <Text>Last Name</Text>
        </View>
        <View style={{ flex: 2, marginLeft: -25, marginTop: 5 }}>
          <Text style={{ fontSize: 20, color: "grey" }}>|</Text>
        </View>
        <View style={{ flex: 9, marginVertical: 5 }}>
          <TextInput style={{ color: "#d53437", fontWeight: "700" }}>Fazlani</TextInput>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 15,
          marginBottom: 15,
          backgroundColor: "white",
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      >
        <View style={{ flex: 9, marginVertical: 10, marginLeft: 25 }}>
          <Text>Phone Number</Text>
        </View>
        <View style={{ flex: 2, marginLeft: -25, marginTop: 5 }}>
          <Text style={{ fontSize: 20, color: "grey" }}>|</Text>
        </View>
        <View style={{ flex: 9, marginVertical: 5 }}>
          <TextInput style={{ color: "#d53437", fontWeight: "700" }}>
            +92 300 3130003
          </TextInput>
        </View>
      </View>

<View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 15,
          marginBottom: 15,
          backgroundColor: "white",
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      >
        <View style={{ flex: 9, marginVertical: 10, marginLeft: 25 }}>
          <Text> New Password</Text>
        </View>
        <View style={{ flex: 2, marginLeft: -25, marginTop: 5 }}>
          <Text style={{ fontSize: 20, color: "grey" }}>|</Text>
        </View>
        <View style={{ flex: 9, marginVertical: 5 }}>
          <TextInput style={{ color:"gray",fontWeight: "700" }} secureTextEntry={true}>
            
          </TextInput>
        </View>
      </View>


<View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 15,
          marginBottom: 15,
          backgroundColor: "white",
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      >
        <View style={{ flex: 9, marginVertical: 10, marginLeft: 25 }}>
          <Text>Confirm Password</Text>
        </View>
        <View style={{ flex: 2, marginLeft: -25, marginTop: 5 }}>
          <Text style={{ fontSize: 20, color: "grey" }}>|</Text>
        </View>
        <View style={{ flex: 9, marginVertical: 5 }}>
          <TextInput style={{ color:"gray",fontWeight: "700" }} secureTextEntry={true}>
            
          </TextInput>
        </View>
      </View>

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginHorizontal: 15,
          marginBottom: 15,
          backgroundColor: "#d53437",
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            textTransform: "uppercase",
            color: "white",
            fontWeight: "700",
          }}
        >
          Save Changes
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Changes;

const styles = StyleSheet.create({
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    backgroundColor: "#d43437",
  },
  loginText: {
    color: "white",
    fontSize: 17,
  },
  forgetButton: {
    // alignItems: "center",
    // justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    margin: 10,
    backgroundColor: "white",
  },
  forgetText: {
    color: "#d43437",
    fontSize: 17,
  },
  forgetIcon: {
    color: "#d43437",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: 10,
  },
});
