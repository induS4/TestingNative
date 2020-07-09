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



const DetailsScreen = ({navigation}) => {
    return(
    <View style={styles.container}>
        <Button title="Go to Details Screen ..again"
    onPress={() => navigation.push("Details")}></Button>
      <Button title="Go to Home"
    onPress={() => navigation.navigate("Home")}></Button>
      <Button title="Go Back"
    onPress={() => navigation.goBack()}></Button>
      <Button title="Go to First Screen"
    onPress={() => navigation.popToTop()}></Button>  
    </View> 
    );
    };

    export default DetailsScreen;
    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }
    })