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
  Dimensions,
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import IconTile from '../../components/IconTile/IconTile';
import Styles from './Styles';
import SITE_LIST from './SiteList';
import MENU_ITEMS from './MenuItems';

const { width } = Dimensions.get('window');
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
              baseColor="#D4D4D4"
              textColor="#40709D"
              itemColor="#40709D"
              value="Toulouse"
              selectedItemColor="red"
              overlayStyle={Styles.dropDownOverlay}
              data={SITE_LIST}
            />
          </View>
        </View>
        <View style={Styles.iconTilesContainer}>
          {
            MENU_ITEMS.map((item, index) => (
              <IconTile
                key={item.key}
                margin={index % 2 === 0 ? Styles.setMargin : null}
                iconName={item.icon}
                title={item.title}
                iconColor={item.color}
                iconSize={width * 0.15}
                handlePress={() => console.log(item.title)}
              />
            ))
          }
        </View>
      </View>
    );
  }
}
