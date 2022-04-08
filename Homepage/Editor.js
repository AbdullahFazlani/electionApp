import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    Ionicons,
    Feather,
    FontAwesome5,
    Fontisto,
    FontAwesome,
  } from "@expo/vector-icons";
  

const Editor = () => {
    const data = [
        {
          heading:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
          author:"Abdullah Fazlani",
          image: require("../assets/latest1.png"),
        },
        {
          heading:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
          author:"Abdullah Fazlani",
          image: require("../assets/latest1.png"),
        },
        {
          heading:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
          author:"Abdullah Fazlani",
          image: require("../assets/latest1.png"),
        },
        {
          heading:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
          author:"Abdullah Fazlani",
          image: require("../assets/latest1.png"),
        },
        {
          heading:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
          author:"Abdullah Fazlani",
          image: require("../assets/latest1.png"),
        },
    ]

  return (
    <View>
       <View style={{ marginLeft: 10, marginTop: 30, marginBottom: 30 }}>
        <Text
          style={{
            fontSize: 23,
            textTransform: "uppercase",
            fontWeight: "700",
          }}
        >
          Editor's Choice
        </Text>
        <View
          style={{
            width: 80,
            marginLeft: 2,
            borderBottomWidth: 3,
            borderBottomColor: "red",
          }}
        ></View>
      </View>
    {data.map((item)=>{
        return(
            <View
            style={{
              display: "flex",

              backgroundColor: "white",
              margin: 10,
              flexDirection: "row",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              //   marginBottom:50
            }}
          >
            <View style={{ flex: 6 }}>
              <Text
                style={{
                  fontSize: 7,
                  fontWeight: "700",
                  textTransform: "uppercase",
                  lineHeight: 10,
                  padding: 10,
                  transform: [{ scaleY: 1.5 }],
                  marginTop: 10,
                }}
              >
                {item.heading}
              </Text>

                <View style={{justifyContent2:"flex-end",padding:10}}>
                    <Text>
                        {item.author}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 2,padding:10}}>
              <Image source={require('../assets/show1.png')} style={{ height: 90, width: 90 ,borderRadius:100}} />
            </View>
          </View>
        )
    })}
      
    </View>
  )
}

export default Editor

const styles = StyleSheet.create({})