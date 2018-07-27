// import { createStackNavigator } from 'react-navigation'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import React from 'react'
import { Text, View, Image } from 'react-native'

import Home from './Home'
import About from './About'
import Profile from './Profile'
import { styles } from '../style/style';
import Header from '../components/Header'

export default Router = createDrawerNavigator({
  Home: { screen: Home},
  About: { screen: About},
  Profile: { screen: Profile}
  // Register: { screen: BeADogLover}
},
{
  contentComponent: (props) => (
    <View style= {{marginTop: 10, flex:1}}>
      <View style={styles.header}>
        <Image 
            source = {require('../Images/dog.jpg')}
            style = {styles.dogImage}
            />
        <Text style = {styles.headerTitle}>Dog Lovers</Text>
      </View>
      <DrawerItems {...props}/>
      {/* <Text>Footer</Text> */}
    </View>
  )
});




