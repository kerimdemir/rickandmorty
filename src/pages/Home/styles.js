import {StyleSheet} from 'react-native';
import {Metrics} from '../../themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.WIDTH * 0.05,
    paddingVertical: Metrics.HEIGHT * 0.05,
  },
  title: {
    marginHorizontal: Metrics.WIDTH * 0.02,
    marginVertical: Metrics.HEIGHT * 0.01,
  },
});
export default styles;
