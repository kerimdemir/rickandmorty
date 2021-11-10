import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={'#4c4b4b'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  horizontal: {
    padding: 20,
  },
});
export default Loader;
