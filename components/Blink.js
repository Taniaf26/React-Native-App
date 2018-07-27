import React, { Component } from 'react';
import {  Text, View, Image} from 'react-native';

import { styles } from '../style/style'

export default class Blink extends Component{
  constructor(props){
    super(props);
    this.state={
      showText: true
    }
  
  setInterval (()=> {
    this.setState({
      showText: !this.state.showText
    })
  },1000)
}

  render(){
    let display = this.state.showText? this.props.text : ' ';
  return(
    <Text style={styles.blue}>{display}</Text>
  )
  }
}