import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar,
} from 'react-native';


const CategoryScreen = ({navigation}) =>{
    return(
        <View style={{height:130 ,width:100,marginLeft :20,borderWidth:0.5,borderRadius:50,borderColor:'#dddddd'}}>
        <View style ={{flex :2}}>
      <Image   style={{flex:1,width:null,height:null,borderRadius:50,resizeMode:'cover'}} 
       source ={this.props.imageUri}></Image>
        </View>
        <View style ={{flex :1,paddingLeft:10,paddingTop:10}}>
    <Text>{this.props.name}</Text>
        </View>
  
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

export default CategoryScreen;
