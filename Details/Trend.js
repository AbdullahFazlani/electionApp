import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Trend = () => {
  return (
    <View>
      <View style={{ marginLeft: 10, marginTop: 30, marginBottom: 40 }}>
        <Text
          style={{
            fontSize: 23,
            textTransform: "uppercase",
            fontWeight: "700",
          }}
        >
          Trending
        </Text>
        <View
          style={{
            width: 90,
            marginLeft: 2,
            borderBottomWidth: 3,
            borderBottomColor: "red",
          }}
        ></View>
      </View>
      <Image source={require("../assets/news.png")} style={styles.image} />
      <View
        style={{
          position: "absolute",
          bottom: 30,
          justifyContent: "center",
          alignItems: "center",
        marginHorizontal:20
        }}
      >
        <Text style={{ color: "white" ,fontSize:9, textTransform:"uppercase",fontWeight:"bold",lineHeight:13,transform:[{scaleY:1.2}]}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>
      </View>
    </View>
  );
};

export default Trend;

const styles = StyleSheet.create({
  image: {
    margin: 10,
    // width:"96%"
    width: 375,
    height: 220,
  },
});
