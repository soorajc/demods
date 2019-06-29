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
  dropDownView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownLabelContainer: {
    width: width * 0.13,
    paddingTop: height * 0.04,
  },
  dropdownContainer: {
    width: width * 0.44,
  },
  dropDownNameLabel: {
    fontSize: height * 0.026,
  },
  dropDownOverlay: {
    marginTop: height * 0.06,
    marginLeft: width * 0.05,
  },
});

export default styles;
