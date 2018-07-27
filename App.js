import React, { Component } from 'react';
import { ScrollView, View, StatusBar, SafeAreaView,Platform} from 'react-native';
import Router from './navigation/Router'

import Header from './components/Header'
import { styles } from './style/style';


export default class App extends Component{
  render(){
    return(
      // <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <Router style={{flex: 1}}/> 
          <StatusBar 
              backgroundColor = '#cfd608'
              hidden ={true}
           />
        </View>
      // </SafeAreaView>
    )
  }
}