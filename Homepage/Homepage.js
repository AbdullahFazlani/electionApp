import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Breaking from "./Breaking";
import Slider from "./Slider";
import Trending from "./Trending";
import Latest from "./Latest";
import Show from "./Show";
import Editor from "./Editor";

const Homepage = () => {
  return (
    <ScrollView style={{backgroundColor:"#e9e9e9"}}>
      <Header />
      <Navbar />
      <Breaking/>
      <Slider/>
      <Trending/>
      <Latest/>
      <Show/>
      <Editor/>
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
