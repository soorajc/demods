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
  header: {
    // marginBottom: height * 0.10,
  },
  title: {
    fontSize: height * 0.025,
    fontWeight: '600',
    color: '#507FA8',
  },
  collapseHeader: {
    paddingLeft: width * 0.05,
    paddingBottom: height * 0.02,
    paddingTop: height * 0.02,
  },
  sectionView: {
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
    flexDirection: 'row',
  },
  collapseBody: {
    width: width * 0.90,
    alignSelf: 'center',
    borderTopWidth: 1,
    borderColor: '#C4C4C4',
    paddingLeft: width * 0.05,
  },
  sectionTitle: {
    color: 'black',
  },
  sectionDescription: {
    fontSize: height * 0.017,
    color: '#999999',
  },
  sectionTextContainer: {
    width: 0.70 * width,
  },
  sectionIconContainer: {
    width: 0.15 * width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingAddButton: {
    position: 'absolute',
    marginTop: height * 0.80,
    marginLeft: width * 0.87,
    zIndex: 1,
  },
});

export default styles;
