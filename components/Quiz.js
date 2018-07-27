import React, {Component} from 'react';
import { TextInput, View, Text, Button, FlatList } from 'react-native';


import { styles } from '../style/style';
import List from '../components/List'


export default class Quiz extends Component{
  static navigationOptions = {
    title: 'Quiz'
  }
  constructor(props){
    super(props);
    this.state = {
      activitiesIceLoves : ['running', 'playing', 'eating', 'cuddling', 'peting'],
      thingsIceLoves: [ {key: 'balls'}, {key: 'socks'}, {key: 'stuffed toys'}, {key: 'clean sheets'} ],
      answer: '',
      response: null
    };
  }

  handleChange = (text) => {
    this.setState({
      answer: text
    })
  }

  handlePress = () => {
  const answer = this.state.activitiesIceLoves.find(item => item.toLowerCase() === this.state.answer.toLowerCase())
    this.setState({
      response: answer !== undefined ? `Excelent! Ice loves ${this.state.answer}` : `He doesn't like ${this.state.answer} or he hasn't tried it yet`,
    })
  }
  
    render(){
      return(
        <View style={styles.view}>
          <List thingsIceLoves={this.state.thingsIceLoves}/> 
          <Text>{'\n'}{'\n'}What activity do you think Ice loves?</Text>
          <TextInput style={styles.textInput}
              onChangeText = {this.handleChange}
              placeholder = "Write your answer here"
          />
          <Button 
            onPress = {this.handlePress}
            title = "Check answer"
            />
          <Text>{this.state.response}</Text>
        </View> 
      )
    }
  
}