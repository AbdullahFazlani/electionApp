import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  Fontisto,
  FontAwesome,
} from "@expo/vector-icons";

const Show = () => {
  const data = [
    {
      heading:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
      date: "03-July-2022",
      time: "1 minute",
      image: require("../assets/latest1.png"),
    },
    {
      heading:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
      date: "03-July-2022",
      time: "1 minute",
      image: require("../assets/latest1.png"),
    },
    {
      heading:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
      date: "03-July-2022",
      time: "1 minute",
      image: require("../assets/latest1.png"),
    },
    {
      heading:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
      date: "03-July-2022",
      time: "1 minute",
      image: require("../assets/latest1.png"),
    },
    {
      heading:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply",
      date: "03-July-2022",
      time: "1 minute",
      image: require("../assets/latest1.png"),
    },
  ];

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
          Shows
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

      <ScrollView horizontal style={{ marginBottom: 20 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return (
            <View
              style={{
                width: 130,
                height: 185,
                backgroundColor: "white",
                borderRadius: 10,
                marginLeft: 10,
                marginBottom: 10,
                overflow: "hidden",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/show1.png")}
                style={{ height: 130, width: 150 }}
              />
              <Text
                style={{
                  textTransform: "uppercase",
                  padding: 10,
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "700",
                }}
              >
                Your show name here
              </Text>
            </View>
          );
        })}
      </ScrollView>
      {data.map((item) => {
        //  const {image}
        return (
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

              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ padding: 10, fontSize: 10 }}>
                    <Fontisto name="date" size={13} />
                    {" " + item.date}, {item.time} ago
                  </Text>
                </View>
                <View style={{ marginLeft: 55 }}>
                  <Text style={{ padding: 10, fontSize: 10 }}>
                    <FontAwesome name="bookmark-o" size={15} />
                  </Text>
                </View>
                <View>
                  <Text style={{ padding: 10, fontSize: 10 }}>
                    <Feather name="upload" size={15} />
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 2, backgroundColor: "red" }}>
              <Image source={item.image} style={{ height: 90, width: 95 }} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Show;

const styles = StyleSheet.create({});
