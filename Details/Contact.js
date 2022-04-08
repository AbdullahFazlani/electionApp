import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome, Fontisto, FontAwesome5 } from "@expo/vector-icons";

const Contact = () => {
  return (
    <View>
      <View style={{ marginLeft: 10, marginTop: 20, marginBottom: 20,justifyContent:"center" }}>
        <Text
          style={{
            fontSize: 18,
            textTransform: "uppercase",
            fontWeight: "700",
            textAlign:"center"
          }}
        >
          Get Even More
        </Text>
        <View
          style={{
            width: 90,
          marginLeft:"auto",
          marginRight:"auto",
            borderBottomWidth: 3,
            borderBottomColor: "red",
          }}
        ></View>
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

        <TouchableOpacity
          style={{ backgroundColor: "#d53437", width: 50, height: 50 }}
        >
          <FontAwesome
            name="send-o"
            size={20}
            color="white"
            style={{ marginVertical: 15, marginHorizontal: 13 }}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={{marginHorizontal:15}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Share & <Text style={{color:"#d53437"}}>Enjoy</Text></Text>
        </View> */}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: -20,
          marginHorizontal: 30,
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#d53437",
            width: "20%",
            flex: 1,
          }}
        ></View>
        <View style={{ marginHorizontal: 15 }}>
          <Text
            style={{
              color: "#d53437",
              fontSize: 15,
              transform: [{ translateY: 8 }],
            }}
          >
            <Text style={{fontSize:15,fontWeight:"bold"}}>Follow & <Text style={{color:"#d53437"}}>Share</Text></Text>
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#d53437",
            width: "20%",
            flex: 1,
          }}
        ></View>
      </View>

      <View style={{ display: "flex", flexDirection: "row",justifyContent:"space-evenly",marginVertical:10 }}>
        

        <View style={{ width: "10%", marginTop: 12 }}>
          <FontAwesome5 name="facebook-square" size={25} color="#d53437" />
        </View>
        <View style={{ width: "10%", marginTop: 12 }}>
          <FontAwesome5 name="instagram-square" size={25} color="#d53437" />
        </View>
        <View style={{ width: "10%", marginTop: 12 }}>
          <FontAwesome5 name="twitter-square" size={25} color="#d53437" />
        </View>
        <View style={{ width: "10%", marginTop: 12 }}>
          <FontAwesome5 name="linkedin" size={25} color="#d53437" />
        </View>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    marginBottom: 30,
    marginHorizontal: 14,
    width: "94%",
    overflow: "hidden",
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
    marginTop: 50,
    width: "65%",
  },
  imageStyle: {
    margin: 5,
    resizeMode: "stretch",
    alignItems: "center",
    paddingLeft:10,
  },
});
