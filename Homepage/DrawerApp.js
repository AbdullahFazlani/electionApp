import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./Homepage";
import Show from "./Show";
import Slider from "./Slider";

const Drawer = createDrawerNavigator();

const DrawerApp = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homepage} />
        <Drawer.Screen name="Show" component={Show} />
        <Drawer.Screen name="Slider" component={Slider} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerApp;

const styles = StyleSheet.create({});
