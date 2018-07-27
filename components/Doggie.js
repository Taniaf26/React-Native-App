import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import { styles } from '../style/style';
import Blink from '../components/Blink'

export default class Doggie extends Component {
  render() {
    let pic = {
      uri: 'https://scontent.fotp5-1.fna.fbcdn.net/v/t1.0-9/299488_104373186332089_5484663_n.jpg?_nc_cat=0&oh=5d026d77ce6449b097cca0a1094319a0&oe=5BE42BC5'
    };
      return (
      <View style={styles.view2}>
        <Text style={styles.blue}>This little guy is Ice. He is awesome. </Text>
        <Image source={pic} style={{width: 193, height: 200, marginTop: 10, marginBottom: 10}}/>
        <Text style={[styles.blue, styles.red]}>He might answer as well if you call him {this.props.name}</Text>
      
      </View>
    );
  }
}