import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '../../themes';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.WIDTH * 0.05,
    paddingVertical: Metrics.HEIGHT * 0.05,
  },
  episodeContainer: {
    backgroundColor: '#FFF',
    borderRadius: Metrics.borderRadius,
    marginBottom: Metrics.WIDTH * 0.02,
  },

  title: {
    marginHorizontal: Metrics.WIDTH * 0.02,
    marginVertical: Metrics.HEIGHT * 0.01,
  },
  episodeText: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    marginTop: Metrics.HEIGHT * 0.01,
  },
});
export default styles;
