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

const SettingsScreen =({navigation}) =>{
    return(
    <View style ={styles.container}>
        <Text>Settings Screen</Text>
        <Button
        title="click here"
        onPress ={() => alert("Button clicked")}
        ></Button>
    </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container :{
        flex :1,
        alignItems :'center',
        justifyContent:'center'
    }
})