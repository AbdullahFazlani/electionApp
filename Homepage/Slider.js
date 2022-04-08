import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
const Slider = () => {
  const [images, setImages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree", // Network image
    // Local image
  ]);

  const [desc,setDesc]=useState([
   `Ituri / Killing of a hundred civilians: “the satate of siedge has failed”, Deputy Promesse Matofali`,
   `Ituri / Killing of a hundred civilians: “the satate of siedge has failed”, Deputy Promesse Matofali`,
   `Ituri / Killing of a hundred civilians: “the satate of siedge has failed”, Deputy Promesse Matofali`,
   `Ituri / Killing of a hundred civilians: “the satate of siedge has failed”, Deputy Promesse Matofali`,
  
  ])

  const [currentIndex,setCurrentIndex]=useState(0);

  return (
    <View>
      
      <SliderBox
        images={images}
        dotColor="red"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={"resize"}
        resizeMode={"cover"}
        paginationBoxStyle={{
          position: "absolute",
          bottom: -40,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10,
         
        }}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          borderColor:"red",
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "red",
        }}
        ImageComponentStyle={{ borderRadius: 15, width: "97%", marginTop: 5 }}
        imageLoadingColor="#2196F3"
        currentImageEmitter={index=>setCurrentIndex(index)}
      />
      <Text style={{position:"absolute",bottom:0,fontSize:21,color:"white",fontWeight:"700",padding:15}}>{desc[currentIndex]}</Text>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
