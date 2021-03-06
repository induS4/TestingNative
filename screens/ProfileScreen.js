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


const ProfileScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button title="click here" 
            onPress={() => alert("Button Clicked")}></Button>
        </View>
    );
};
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        }
    }
)
export default ProfileScreen;
