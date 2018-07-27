import React, {Component} from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import ViewMoreText from 'react-native-view-more-text'

import {styles} from '../style/style'

export default class Article extends Component{
  renderViewMore(onPress){
    return (
      <Text   
        onPress={onPress}
        style={{color: 'blue', fontWeight: 'bold'}}> View more </Text>
    )
  }
  renderViewLess(onPress){
    return(
      <Text 
        onPress={onPress}
        style={{color: 'blue', fontWeight: 'bold'}}
        >View less</Text>
    )
  }
  render(){
    return(
      <View>
        <Text style={{fontSize:20, fontWeight:'bold', textAlign: 'center'}}>
          5 Crucial Distinctions Between Being A Dog Lover And Being A Dog Parent
        </Text>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={this.renderViewMore}
          renderViewLess={this.renderViewLess}
          // textStyle={{textAlign: 'center'}}
        >
          <Text>1. A Dog Lover: Will pet a dog and move on.{'\n'}{'\n'} A Dog Parent: Will ask the dog’s name, how old they are, basically every detail down to, “where did you buy that leash?”{'\n'}{'\n'}
                2. Every Dog Lover: Tears up when a dog dies in a movie.{'\n'}{'\n'} A Dog Parent: Will sob uncontrollably, hug their fur baby, and cover their eyes throughout the entire ordeal.{'\n'}{'\n'}
                3. Dog Lovers: Go to the dog park to play with and see all of the dogs.{'\n'}{'\n'} Dog Parents: Go to the dog park and become the authority on everyone else’s pup parenting style.{'\n'}{'\n'}
                4. Dog Lovers: Go on vacations as usual.{'\n'}{'\n'} Dog Parents: Fall down the Internet rabbit hole researching the best ways to bring their dog along for all the fun.{'\n'}{'\n'}
                5. Dog Lovers: Go out to brunch, the movies, a date, they participate in life and in conversations as usual.{'\n'}{'\n'}Dog Parents: Do all of these things… but are always thinking about what their dog is doing in the back of their minds.{'\n'}{'\n'}
          </Text>
        </ViewMoreText>
      </View>
    )
  }
}