import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Trending from '../Homepage/Trending'
import Trend from './Trend'
import Description from './Description'
import Latest from '../Homepage/Latest'
import Contact from './Contact'
// import Trending from '../Trending/Trending'

const Details = () => {
  return (
    <ScrollView>
      <Header/>
      <Navbar/>
      <Trending/>
      <Trend/>
      <Description/>   
      <Latest/> 
      <Contact/>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({})