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
  FlatList,
} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import WORKERS_LIST from './WorkersList';
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

  renderSection = (item, index, totalLength) => (
    <TouchableOpacity
      style={[Styles.sectionView,
        { borderBottomWidth: index !== totalLength - 1 ? 1 : 0 },
      ]
      }
    >
      <View style={Styles.sectionTextContainer}>
        <Text style={Styles.sectionTitle}>{item.title}</Text>
        <Text style={Styles.sectionDescription}>{item.description}</Text>
      </View>
      <View style={Styles.sectionIconContainer}>
        <Icon
          name="chevron-right"
          size={width * 0.05}
          color="#999999"
        />
      </View>
    </TouchableOpacity>
  );

  renderListItem(item) {
    const totalLength = item.contracts.length;
    return (
      <Collapse>
        <CollapseHeader style={Styles.collapseHeader}>
          <View style={Styles.header}>
            <Text style={Styles.title}>
              {item.title + ' (' + item.count + ') '}
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={Styles.collapseBody}>
          {
            item.contracts.map((content, index) => this.renderSection(content, index, totalLength))
          }
        </CollapseBody>
      </Collapse>
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          extraData={this.state}
          bounces={false}
          data={WORKERS_LIST}
          renderItem={({ item }) => this.renderListItem(item)}
          keyExtractor={(item, index) => index}
        />
        <TouchableOpacity style={Styles.floatingAddButton}>
          <Icon name="plus-circle" size={width * 0.10} color="#6EB4CD" />
        </TouchableOpacity>
      </View>
    );
  }
}
