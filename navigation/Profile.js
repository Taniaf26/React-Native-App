import React, { Component } from 'react';
import {  Text, View, Image, TextInput, ScrollView, ViewPagerAndroid, Button, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation'

import { styles } from '../style/style'
import Doggie from '../components/Doggie'
import Header from '../components/Header'
import Quiz from '../components/Quiz'

export default class Profile extends Component {
  static navigationOptions = {
    drawerLabel: "Ice's Profile",
  }

  render(){
    const {navigate} = this.props.navigation
    return(
      <View style={{flex:1}}>
          <Header navigation={this.props.navigation}/>
          <ScrollView 
          style={{flex: 1, backgroundColor: '#fff'}}>
        {/* <Button
        title="Go to About"
        onPress={() => navigate('About')}
        /> */}
          <View style={styles.container}>
              <Doggie name='Icelin' />
              <Quiz/>
          </View>   
          </ScrollView>
      </View>
    );
  }
}