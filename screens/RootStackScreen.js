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


 import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen';
import MainTabScreen from './MainTabScreen';

const RootStack = createStackNavigator();

const RootStackScreen = () =>{
  return(
  <RootStack.Navigator headerMode="none">
<RootStack.Screen name ="SplashScreen" component={SplashScreen}></RootStack.Screen>
<RootStack.Screen name ="SignInScreen" component={SignInScreen}></RootStack.Screen>
<RootStack.Screen name ="SignUpScreen" component={SignUpScreen}></RootStack.Screen>
<RootStack.Screen name ="MainTabScreen" component={MainTabScreen}></RootStack.Screen>
    </RootStack.Navigator>

  );
}

export default RootStackScreen;