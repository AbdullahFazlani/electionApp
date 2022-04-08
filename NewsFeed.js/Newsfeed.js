import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import CardNews from '../Components/CardNews'
import News from './News'

const Newsfeed = () => {
  return (
    <ScrollView>
     <Header/>
     <Navbar/>
    <News/>
    </ScrollView>
  )
}

export default Newsfeed

const styles = StyleSheet.create({})