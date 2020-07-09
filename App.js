

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import RootStackScreen from './screens/RootStackScreen';
import SignInScreen from './screens/SignInScreen';



const Drawer = createDrawerNavigator();

  
const App = () => {
  return(
    <NavigationContainer>
       <Drawer.Navigator  initialRouteName = "RootStackScreen"   drawerContent ={props =><DrawerContent {...props} />}>
       <Drawer.Screen name="RootStackScreen" component={RootStackScreen} />
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="SignInScreen" component={SignInScreen} />
       
      </Drawer.Navigator>  
    </NavigationContainer> 
  );  
  };
  

export default App;

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  }
})
