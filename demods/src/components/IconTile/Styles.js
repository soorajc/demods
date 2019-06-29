import {
  StyleSheet,
  Dimensions,
} from 'react-native';


const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  menuItem: {
    height: height * 0.17,
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    color: 'black',
    marginTop: height * 0.01,
    fontSize: height * 0.024,
  },
});

export default styles;
