import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'; 
import CategoryScreen from './Category'
const HomeScreen = ({navigation}) => {
return(
<SafeAreaView style={{flex :1}}>
  <View style ={{flex :1}}>
  <View style ={{height:80 ,backgroundColor:'white',
  borderBottomWidth :1,borderBottomColor :'#dddddd', alignItems:'center' }}>
    <View style={{flexDirection :'row' ,padding :15,
    backgroundColor :'white',marginHorizontal :10,
    shadowOffset :{width:0,height:0},
    shadowColor :'black',
    shadowOpacity:0.2,
    elevation :1
  }}>
  <Icon name = "ios-search" size ={30} ></Icon>
  <TextInput 
   underlineColorAndroid ='transparent'
  placeholder="Search "
  placeholderTextColor ="grey"style={{flex :1, paddingLeft:10 ,paddingBottom :25
    ,fontWeight :'700',backgroundColor:'white'}}/>
    </View>
  </View>
    <ScrollView scrollEventThrottle ={16}> 
    <View style={{backgroundColor:'white',flex:1,paddingTop:20}}>
    <Text  style={{fontWeight:'700' ,fontSize:18,paddingHorizontal:20,paddingBottom:10}}>Top Trending Categories</Text>
                    
    <ScrollView horizontal={true} >
    <View style={{height:130 ,width:100,marginLeft :20,borderWidth:0.5,borderColor:'#dddddd'}}>
      <View style ={{flex :2 ,alignContent:'center'}}>
    <Image   style={{flex:1,width:null,height:null,borderRadius:50,resizeMode:'cover'}}  source ={require('./Images/flower6.jpg')}></Image>
      </View>
      <View style ={{flex :1,paddingLeft:10,paddingTop:10}}>
        <Text>Cat 1</Text>
      </View>
    </View>
    <View style={{height:130 ,width:100,marginLeft :20,borderWidth:0.5,borderColor:'#dddddd'}}>
      <View style ={{flex :2}}>
    <Image   style={{flex:1,width:null,height:null,borderRadius:50,resizeMode:'cover'}}  source ={require('./Images/flower8.jpg')}></Image>
      </View>
      <View style ={{flex :1,paddingLeft:10,paddingTop:10,alignContent:'center' }}>
        <Text>Cat 2</Text>
      </View>
    </View>
    <View style={{height:130 ,width:100,marginLeft :20,borderWidth:0.5,borderColor:'#dddddd'}}>
      <View style ={{flex :2}}>
    <Image   style={{flex:1,width:null,height:null,borderRadius:50,resizeMode:'cover'}}  source ={require('./Images/flower7.jpg')}></Image>
      </View>
      <View style ={{flex :1,paddingLeft:10,paddingTop:10}}>
        <Text>Cat 3</Text>
      </View>
    </View>
    <View style={{height:130 ,width:100,marginLeft :20,borderWidth:0.5,borderColor:'#dddddd'}}>
      <View style ={{flex :2}}>
    <Image   style={{flex:1,width:null,height:null,borderRadius:50,resizeMode:'cover'}}  source ={require('./Images/flower5.jpg')}></Image>
      </View>
      <View style ={{flex :1,paddingLeft:10,paddingTop:10}}>
        <Text>Home</Text>
      </View>
    </View> 

    </ScrollView>
    </View>
    <View style={{marginTop:40,paddingHorizontal:20,backgroundColor:'white'}}>
      <Text style={{fontSize:24,fontWeight:'700'}}>New Items</Text>
    </View>
    <View style={{flexDirection :'row', backgroundColor:'white' }}>

    <View style={{flexDirection :'column', marginTop:10,paddingHorizontal:20,height:130,width:200}}>
    <Image   style={{flex:1,width:null,height:null,resizeMode:'cover'}}  source ={require('./Images/flower.jpg')}></Image>

      <Text style={{alignSelf:'center'}}>Image1</Text> 
      </View>
<View style={{flexDirection :'column' ,marginTop:10,paddingHorizontal:20,paddingHorizontal:20,height:130,width:200}}>
<Image   style={{flex:1,width:null,height:null,resizeMode:'cover'}}  source ={require('./Images/flower2.jpg')}></Image>

<Text style={{alignSelf:'center'}}>Image2</Text>
 </View>
    </View>
    <View style={{flexDirection :'row',backgroundColor:'white' }}>

<View style={{flexDirection :'column' ,marginTop:10,paddingHorizontal:20,paddingHorizontal:20,height:130,width:200}}>
<Image   style={{flex:1,width:null,height:null,resizeMode:'cover'}}  source ={require('./Images/flower3.jpg')}></Image>

<Text style={{alignSelf:'center'}}>Image3</Text>  
</View>
<View style={{flexDirection :'column' ,marginTop:10,paddingHorizontal:20,paddingHorizontal:20,height:130,width:200}}>
<Image   style={{flex:1,width:null,height:null,resizeMode:'cover'}}  source ={require('./Images/flower4.jpg')}></Image>

<Text style={{alignSelf:'center'}}>Image4</Text> 
</View>

    </View>
    </ScrollView>
   
  </View>
  
</SafeAreaView> 
);
};
export default HomeScreen;

const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     alignItems:'center',
    //     justifyContent:'center'
    // }
})
