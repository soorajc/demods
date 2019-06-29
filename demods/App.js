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

const App = createStackNavigator({
  Home: { screen: HomeScreen },
}, {
  transitionConfig: () => fadeIn(1000),
  headerMode: 'screen',
  headerLayoutPreset: 'center',
});

export default createAppContainer(App);
