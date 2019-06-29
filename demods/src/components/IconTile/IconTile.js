/**
 * Icon Tile Component
 *
 * @format
 * @flow
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import Styles from './Styles';

const IConTile = ({
  iconName, iconColor, iconSize, title, handlePress, margin,
}) => (
  <TouchableOpacity onPress={() => handlePress()} style={[Styles.menuItem, margin]}>
    <Icon
      name={iconName}
      color={iconColor}
      size={iconSize}
    />
    <Text style={[Styles.menuLabel, { color: iconColor }]}>
      {title}
    </Text>
  </TouchableOpacity>
);


export default IConTile;

IConTile.defaultProps = {
  iconName: '',
  iconColor: '',
  iconSize: 30,
  title: '',
  handlePress: null,
  margin: null,
};

IConTile.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  handlePress: PropTypes.func,
  margin: PropTypes.style,
};
