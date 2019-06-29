/**
 * Home Screen
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import Styles from './Styles';
import SITE_LIST from './SiteList';

const appLogo = require('../../assets/applogo.png');


type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <View style={Styles.logoContainer}>
            <Image source={appLogo} />
          </View>
          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>Poly Compétences</Text>
          </View>
        </View>
        <View style={Styles.dropDownView}>
          <View style={Styles.dropDownLabelContainer}>
            <Text style={Styles.dropDownNameLabel}>Site</Text>
          </View>
          <View style={Styles.dropdownContainer}>
            <Dropdown
              baseColor="#08325F"
              textColor="#08325F"
              itemColor="#08325F"
              value="Toulouse"
              selectedItemColor="red"
              overlayStyle={Styles.dropDownOverlay}
              data={SITE_LIST}
            />
          </View>
        </View>
      </View>
    );
  }
}
