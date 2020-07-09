import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
  } from 'react-native';
import {
       Avatar,
       Title,
       Caption,
       Paragraph,
       Drawer,
       Text, 
       TouchableRipple,
       Switch
        } from 'react-native-paper';

  import {
      DrawerContentScrollView,
      DrawerItem
  }   from '@react-navigation/drawer';
  
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

  export default function DrawerContent(props){

    const [isDarkTheme,setIsDarkTheme] = React.useState(false)
    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme)
    }
      return(
          <View style ={{flex :1}}>
              <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}> 
                <View style ={styles.userInfoSection}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column' ,marginTop:15 }}>
                   <Avatar.Image source= {require('./Images/logo.jpg')}
                      size={50}></Avatar.Image>
                    </View >
                    <View style={{flexDirection:'column',marginTop:15,marginLeft:15}}>
                    <Title style={styles.title}>Indira Thevar</Title>
                    <Caption style ={styles.caption}>ithevar950@gmail.com</Caption>
                    </View>
                    </View>
                   
                    <View style ={styles.row}>
                    <View style ={styles.section}>
                    <Paragraph style={[styles.paragraph ,styles.caption]}>3</Paragraph>
                    <Caption style ={styles.caption}>Orders</Caption>
                    </View>
                    <View style ={styles.section}>
                    <Paragraph style={[styles.paragraph ,styles.caption]}>5 </Paragraph>
                    <Caption style ={styles.caption}>items in cart</Caption>
                    </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                <DrawerItem  icon ={({color,size}) => (
                      <Icon name = "home-outline"
                      color ={color}
                      size={size}
                      ></Icon>
                  )}
                    label ="Home"
                    onPress ={() => {props.navigation.navigate('Home')}}
                  ></DrawerItem>
                 <DrawerItem  icon ={({color,size}) => (
                      <Icon name = "account-outline"
                      color ={color}
                      size={size}
                      ></Icon>
                  )}
                    label ="Profile"
                    onPress ={() => {props.navigation.navigate('Savings')}}

                  ></DrawerItem>
                   <DrawerItem  icon ={({color,size}) => (
                      <Icon name = "bookmark-outline"
                      color ={color}
                      size={size}
                      ></Icon>
                  )}
                    label ="Account"
                    onPress ={() => {props.navigation.navigate('SignInScreen')}}
                  ></DrawerItem>
                   <DrawerItem  icon ={({color,size}) => (
                      <Icon name = "settings-outline"
                      color ={color}
                      size={size}
                      ></Icon>
                  )}
                    label ="Settings"
                    onPress ={() => {props.navigation.navigate('SettingsScreen')}}
                  ></DrawerItem>
                   <DrawerItem  icon ={({color,size}) => (
                      <Icon name = "account-check-outline"
                      color ={color}
                      size={size}
                      ></Icon>
                  )}
                    label ="Support"
                    onPress ={() => {props.navigation.navigate('SupportScreen')}}
                  ></DrawerItem>
                </Drawer.Section>
                <Drawer.Section title ="Preferences">
                    <TouchableRipple onPress={() =>{toggleTheme()} }>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                            <Switch value ={isDarkTheme}/>
                            </View>
                            
                        </View>
                    </TouchableRipple>

              </Drawer.Section>

                </View>
              </DrawerContentScrollView>
              <Drawer.Section style ={styles.bottomDrawerSection}>
                  <DrawerItem  icon ={({color,size}) => (
                      <Icon name = "exit-to-app"
                      color ={color}
                      size={size}
                      ></Icon>
                  )}
                    label ="Sign Out"
                    onPress ={() => {}}
                  ></DrawerItem>
              </Drawer.Section>
           
          </View>
      )
  }

  const styles = StyleSheet.create(
      {
          drawerContent :{
              flex :1,
          },
          userInfoSection :{
              paddingLeft:20
          },
          title :{
              fontSize :16,
              marginTop :3,
              fontWeight :'bold'
          },
          caption :{
              fontSize :14,
              lineHeight :16
          },
          row :{
              marginTop :20,
              flexDirection:'row',
              alignItems:'center',
          },
          section :{
            flexDirection:'row',
            alignItems:'center',
            marginRight:15
          },
          paragraph :{
              fontWeight :'bold',
              marginRight:3,
          },
          drawerSection :{
              marginTop :15,
        },
        bottomDrawerSection :{
            marginBottom:15,
            borderTopColor:'#f4f4f4',
            borderTopWidth :1
        },
        preference :{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingVertical:12,
            paddingHorizontal:16,
        }
    });
