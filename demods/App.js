/**
 * Root File Of The App
 *
 * @format
 * @flow
 */

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import { fadeIn } from 'react-navigation-transitions';
import HomeScreen from './src/screens/Home/Home';
import Workers from './src/screens/Workers/Workers';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Workers: { screen: Workers },
}, {
  transitionConfig: () => fadeIn(1000),
  headerMode: 'screen',
  headerLayoutPreset: 'center',
});

export default createAppContainer(App);
