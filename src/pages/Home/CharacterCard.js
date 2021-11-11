import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Metrics from '../../themes/metrics';
import {connect} from 'react-redux';

const CharacterList = ({character: {character}}) => {
  return (
    <View style={styles.container}>
      <Text>{character.name}</Text>
      <Text>{character.status}</Text>
    </View>
  );
};

const mapDispatchToProps = {};
const mapStateToProps = ({character}) => ({character});
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);

const styles = StyleSheet.create({
  container: {
    borderRadius: Metrics.borderRadius,
    borderWidth: 0.5,
    padding: 10,
    width: 200,
    height: Metrics.HEIGHT * 0.6,
    marginTop: Metrics.HEIGHT * 0.02,
    marginRight: 20,
  },
});
