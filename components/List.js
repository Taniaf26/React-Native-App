import React, { Component } from 'react'
import { FlatList, View, Text } from 'react-native'

import { styles } from '../style/style'

export default class List extends Component{
  render(){
    return(
      <View style={styles.view2}> 
        <Text>Here are some things Ice likes, in case you want to know him:{'\n'}</Text>
        <FlatList style={styles.list}
        data={this.props.thingsIceLoves} 
        renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
        />
      </View>
    )
    
  }
}