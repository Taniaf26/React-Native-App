import React, {Component} from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

import {styles} from '../style/style'

export default class Subscribe extends Component{
  constructor(){
    super()
    this.state={
      Name : '',
      Email : ''
    }
  }

  handleChangeName = (text) => {
    this.setState({
      Name: text
    })
  }

  handleChangeEmail = (text) => {
    this.setState({
      Email: text
    })
  }

  handleSubscribe = () =>{
    Alert.alert(
      `Thank you ${this.state.Name} for joining our comunity.`,
      `You will recive info and offers on ${this.state.Email}. If you don't want to recive any messages just click 'No messages'` ,
      [
        // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'No messages', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }

  render(){
    return(
      <View style={{flex:1, marginTop: 0}}>
        <View style={styles.subscribeForm}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Join our comunity for the latest info and exclusive offers!</Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 15, marginLeft: 10}}>Name:</Text>
          <TextInput
            placeholder = "Natalie Ionescu"
            onChangeText = {this.handleChangeName}
            style ={styles.subscribeInput}
            />
          <Text style={{color: 'black', fontWeight: 'bold', fontSize:15, marginLeft:10}}>Email:</Text>
          <TextInput
            placeholder = "natalie@gmail.com"
            onChangeText = {this.handleChangeEmail}
            style ={styles.subscribeInput}
            />
          <TouchableOpacity
            style={styles.subscribeButton}
            onPress = {this.handleSubscribe}
            >
            <Text style={{color:'white'}}>JOIN NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}