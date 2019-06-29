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
  header: {
    height: 0.13 * height,
    flexDirection: 'row',
  },
  logoContainer: {
    width: 0.25 * width,
    height: 0.13 * height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: 0.75 * width,
    height: 0.13 * height,
    justifyContent: 'center',
    paddingLeft: width * 0.03,
  },
  title: {
    color: '#08325F',
    fontSize: height * 0.04,
    fontWeight: 'bold',
  },
});

export default styles;
