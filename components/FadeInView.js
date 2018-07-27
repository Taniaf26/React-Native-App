import React, { Component } from 'react';
import {  Text, View, Image, TextInput, ScrollView,  Button, Animated }from 'react-native';

import { styles } from '../style/style'
import Header from '../components/Header'

export default class FadeInView extends Component{
  state= {
    fadeAnim: new Animated.Value(0)
  }

componentDidMount(){
  Animated.timing(
    this.state.fadeAnim,{
      toValue: 1,
      duration: 10000,
    }
  ).start();
}
 render(){
   let {fadeAnim} = this.state;
   return(
     <Animated.View
      style= {{...this.props.style,
      opacity: fadeAnim,
      transform: [{
        translateX: fadeAnim.interpolate({
          inputRange: [0,0.25,0.5,1],
          outputRange: [-100, 100, -100, 0]
        })
      }]
    }}
      >
      {this.props.children}
      </Animated.View>
   )
 }
}