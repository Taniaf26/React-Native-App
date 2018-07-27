import React, { Component } from "react";
import { ViewPagerAndroid, Image, View, Text, ScrollView, Dimensions } from "react-native";

import { styles } from '../style/style'

export default class SlideShowComponent extends Component {
  render() {
    let width = Dimensions.get('window').width
    return (
        <ScrollView
          horizontal={true}
          style={styles.viewPager} 
          pagingEnabled ={true}
          >
        <View style={styles.pageStyle} key="1">
          <Image
            source={require("../Images/GoldenRetriver.jpg")}
            style={{width: width,  height: 200,}}
        />
        </View>
        <View style={styles.pageStyle} key="2">
          <Image
            source={require("../Images/beagle2.jpg")}
            style={{width: width,  height: 200,}}
          />
        </View>
        <View style={styles.pageStyle} key="3">
          <Image
            source={require("../Images/DogWithButerfly.jpg")}
            style={{width: width,  height: 200,}}
          />
        </View>
        <View style={styles.pageStyle} key="4">
          <Image
            source={require("../Images/pupper.jpg")}
            style={{width: width, height: 200,}}
          />
        </View>
      </ScrollView>
    );
  }
}
