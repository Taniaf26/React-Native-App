import React, { Component } from 'react';
import {  Text, View, Image, TextInput, ScrollView,  Button, Animated, ViewPagerAndroid }from 'react-native';

import { styles } from '../style/style'
import Header from '../components/Header'
import FadeInView from '../components/FadeInView'

export default class Apps extends Component {
  static navigationOptions = {
    drawerLabel: 'About'
  }
  render(){
    const { navigate } = this.props.navigation
    return(
      <View style={{flex:1}}>
        {/* <Button
          title= "Back Home"
          onPress = {() => navigate("Home")}/> */}
           <Header navigation={this.props.navigation}/>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
          </FadeInView>
        </View>

      </View>
    );
  }
}
