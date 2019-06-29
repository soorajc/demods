/**
 * Workers Screen
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Styles from './Styles';

const { width } = Dimensions.get('window');

type Props = {};
export default class Workers extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Collaborateurs',
      headerTintColor: '#08325F',
      headerTransparent: false,
      headerTitleStyle: Styles.headerTitle,
      headerBackTitle: null,
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Styles.backButton}
        >
          <Icon
            name="chevron-left"
            size={width * 0.06}
            color="#08325F"
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          style={Styles.searchButton}
        >
          <Icon
            name="search"
            size={width * 0.06}
            color="#4C7CA5"
          />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text>Workers</Text>
      </View>
    );
  }
}
