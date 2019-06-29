import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    paddingLeft: width * 0.04,
    height: 0.09 * height,
    justifyContent: 'center',
    width: 0.15 * width,
  },
  searchButton: {
    paddingRight: width * 0.04,
  },
});

export default styles;
