import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const CardNews = () => {
  return (
    <View>
        
      <View style={styles.card}>
        <Image source={require("../assets/news.png")} style={styles.image} />
        <Text style={styles.newsText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has Lorem Ipsum is simply
        </Text>
        <View style={styles.newsEnd}>
          <View style={{ flex: 18 }}>
            <Text style={{fontSize:11,color:"grey"}}>1 minute ago</Text>
          </View>
          <View style={{ flex: 1 }} >
            <Feather name="upload" size={18} color="grey"/>
          </View>
        </View>
        {/* <Text>hello</Text> */}
      </View>
    </View>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  card: {
      borderWidth:0.1,
    overflow: "hidden",
    // marginTop: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  image: {
    width: "98.6%",
    margin: 2,
    // height: "70%",
    height: 200,
  },
  newsText: {
    fontSize: 6.5,
    textTransform: "uppercase",
    marginTop: 10,
    lineHeight: 9,
    paddingLeft: 15,
    letterSpacing: 0.3,
    paddingRight: 80,
    fontWeight: "700",
    transform: [{ scaleY: 1.6 }],
  },
  newsEnd: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 13,
    marginTop: 20,
    marginBottom: 10,
  },
});
