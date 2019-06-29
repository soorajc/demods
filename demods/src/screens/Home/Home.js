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

import Styles from './Styles';

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
      </View>
    );
  }
}
