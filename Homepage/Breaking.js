import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextTicker from "react-native-text-ticker";

const Breaking = () => {
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#d53437",
          }}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "700" }}>
            Breaking News
          </Text>
        </View>
        <View
          style={{ flex: 5, justifyContent: "center" }}
        >
          <TextTicker
            style={{ fontSize: 15,color:"#9f9f9f"}}
            duration={10000}
            scrollSpeed={400}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={0}
          >
            Super long piece of text is long. The quick brown fox jumps over the
            lazy dog.
          </TextTicker>
        </View>
      </View>
    </View>
  );
};

export default Breaking;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    height: 40,
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
  },
});
