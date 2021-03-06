import {Dimensions, Platform} from 'react-native';
import { Metrics } from "./index";

const {width, height} = Dimensions.get('window');
const metrics = {
  WIDTH: width,
  HEIGHT: height,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  borderRadius: 6,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  textSize: {
    tiny: 10,
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    xl: 20,
  },
};

export default metrics;
