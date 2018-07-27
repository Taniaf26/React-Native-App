import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Platform} from 'react-native';

import { styles } from '../style/style';

export default class Header extends Component{

  onHamburgerClick = () =>  {
    this.props.navigation.toggleDrawer()
  }

  render(){
    return(
      <View style={{ height: Platform.OS ==='ios'? 60: 40, backgroundColor: '#cfd608'}}>
         <View style = {{flex:1, paddingTop: Platform.OS==='ios'? 10:0}}>
          <TouchableOpacity  
            onPress={this.onHamburgerClick} 
            style={{width: 40, height: 50}} 
            // hitSlop ={{top:10, left: 10, bottom: 45, right: 10 }}
            >
            <Image
              source = {require('../Images/Hamburger_icon.png')}
              style ={{width: 25, height: 25, marginLeft: 10, marginTop: 10, alignSelf:'flex-start', }}/>
          </TouchableOpacity>
          </View>
          <View >
          <Text style={{fontWeight: 'bold', alignSelf:'center' , paddingBottom: 12}}>Dog Lovers App</Text>
         </View> 
      </View>
    )
  }
}