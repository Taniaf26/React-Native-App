import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ViewPagerAndroid,
  Button,
  StatusBar
} from "react-native";
import { NavigationActions } from "react-navigation";

import { styles } from "../style/style";
import Header from "../components/Header";
import SlideShowComponent from '../components/SlideShow'
import Subscribe from '../components/Subscribe'
import Article from '../components/Article'

export default class Apps extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{ flex: 1 }}>
        <Header navigation={this.props.navigation} />
        <Text>CEVA</Text>
        <SlideShowComponent/>
        <Article/>
        <Subscribe/>
        {/* <Text>gfsccydf</Text> */}
      </ScrollView>
    );
  }
}
