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

const BookmarkScreen =({navigation}) =>{
    return(
    <View style ={styles.container}>
        <Text>Bookmark Screen</Text>
        <Button
        title="click here"
        onPress ={() => alert("Button clicked")}
        ></Button>
    </View>
    );
}

export default BookmarkScreen;

const styles = StyleSheet.create({
    container :{
        flex :1,
        alignItems :'center',
        justifyContent:'center'
    }
})