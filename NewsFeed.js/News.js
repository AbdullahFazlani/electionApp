import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CardNews from "../Components/CardNews";

const News = () => {
    const array=[1,2,3,4,5,6,7,8,9,10,11,22,33,44];
    const [visible,setVisible]=useState(5);
    const addMore=()=>{
       setVisible(visible+5);
    }
  return (
    <View>
      <View style={{ marginTop: 30 }}></View>
      <CardNews />
     {array.slice(0,visible).map(()=>{
         return(
             <CardNews/>
         )
     })}
     {visible< array.length &&
      <TouchableOpacity style={styles.newsButton} onPress={addMore}>
        <Text style={{ textAlign: "center", padding: 15, fontWeight: "700" }}>
          View More
        </Text>
      </TouchableOpacity>
     }
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  newsButton: {
    // borderWidth: 1,
    marginHorizontal: 12,
    marginVertical: 30,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
