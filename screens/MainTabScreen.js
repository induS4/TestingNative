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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingsScreen';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const MainTabScreen =() =>{
    return(
        <Tab.Navigator
        initialRouteName="Home"
        style={{ backgroundColor: '#fff' }}
        tabBarOptions={{
          activeTintColor: '#ccff90',
          inactiveTintColor:'#fff',
          style:{
            backgroundColor: '#009387'
          }
        }}
        >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor:'#009387',
            tabBarIcon: ({ color}) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Categories',
            tabBarColor:'#009387',

            tabBarIcon: ({ color}) => (
            <Icon name="md-apps" color={color} size={26} />
            ),
          }}
        />

<Tab.Screen
          name="Savings"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Savings',
            tabBarColor:'#009387',
            tabBarIcon: ({ color, size }) => (
              <Icon name="ios-cash" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={ExploreStackScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarColor:'#009387',
            tabBarIcon: ({ color}) => (
              <Icon name="ios-cart" color={color} size={25} />
            ),
          }}
        />


      </Tab.Navigator>
    )
}

const HomeStackScreen = ({navigation}) => {
    return(
      <HomeStack.Navigator screenOptions={{
        headerStyle:
        {
          backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} 
        options = {{ 
           title :'Overview',
           headerLeft :() =>(
             <Icon.Button name='ios-menu' size={25} 
             backgroundColor='#009387' onPress={() =>navigation.openDrawer()}></Icon.Button>
           )
           }} />
      </HomeStack.Navigator>
    );
    };
  


    const DetailsStackScreen = ({navigation}) => {
      return(
        <DetailsStack.Navigator screenOptions={{
          headerStyle:
          {
            backgroundColor:'#009387'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          }
        }}>
          <DetailsStack.Screen name="Details" component={DetailsScreen} 
          options = {{ 
             title :'Details' , headerLeft :() =>(
              <Icon.Button name='ios-menu' size={25} 
              backgroundColor='#009387' onPress={() =>navigation.openDrawer()}></Icon.Button>
            )}} />
        </DetailsStack.Navigator>
      );
      };

      const ProfileStackScreen = ({navigation}) => {
        return(
          <ProfileStack.Navigator screenOptions={{
            headerStyle:
            {
              backgroundColor:'#009387'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            }
          }}>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} 
            options = {{ 
               title :'Savings' , headerLeft :() =>(
                <Icon.Button name='ios-menu' size={25} 
                backgroundColor='#009387' onPress={() =>navigation.openDrawer()}></Icon.Button>
              )}} />
          </ProfileStack.Navigator>
        );
        };
    
        const ExploreStackScreen = ({navigation}) => {
          return(
            <ExploreStack.Navigator screenOptions={{
              headerStyle:
              {
                backgroundColor:'#009387'
              },
              headerTintColor:'#fff',
              headerTitleStyle:{
                fontWeight:'bold'
              }
            }}>
              <ExploreStack.Screen name="Cart" component={ExploreScreen} 
              options = {{ 
                 title :'Your Cart' , headerLeft :() =>(
                  <Icon.Button name='ios-menu' size={25} 
                  backgroundColor='#009387' onPress={() =>navigation.openDrawer()}></Icon.Button>
                )}} />
            </ExploreStack.Navigator>
          );
          };
  
       



    
        export default MainTabScreen;

  