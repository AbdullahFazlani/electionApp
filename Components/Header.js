import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import DrawerBar from '../Drawer/Drawer';



const Header = () => {
  const navigation =useNavigation();
   console.log(navigation);
      
  return (
    // <DrawerBar/>
    <View style={styles.container1}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginTop: 53,
          marginRight: 40,
        }}
      >
        <Text style={styles.sub}>Subscribe</Text>
      
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
        
          <AntDesign name="facebook-square" size={20} color="red" />
          <FontAwesome5 name="instagram-square" size={20} color="red" />
          <FontAwesome5 name="twitter-square" size={20} color="red" />
          <AntDesign name="linkedin-square" size={20} color="red" />
        </View>
      </View>

      <TouchableOpacity style={{ flex: 1,marginLeft:0 }}  >
        <Image
          style={styles.Logo}
          source={require("../assets/Election-Logo.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}
        onPress={()=>navigation.openDrawer()}
      >
        
        <Image
          style={styles.sideIcon}
          source={require("../assets/side-icon.png")}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container1: {
        display: "flex",
        height: 150,
        padding: 20,
        flexDirection: "row",
      },
    
      Logo: {
        height: 130,
        width: 120,
      },
      sub: {
        color: "#d84c4f",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
      },
      sideIcon:{
        height: 40,
        width: 40,
        marginLeft:30
      }
})