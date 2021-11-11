import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Metrics from '../themes/metrics';
import {connect} from 'react-redux';
import {Divider, Loader} from '../components';
import {Colors, Fonts} from '../themes';

const CharacterList = ({character: {character, fetching}}) => {
  return (
    <View style={styles.card}>
      {fetching ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: character.image}} />

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Name:</Text>
            <Text numberOfLines={1} style={styles.infoValue}>
              {character.name}
            </Text>
          </View>
          <Divider />
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Status:</Text>
            <Text numberOfLines={1} style={styles.infoValue}>
              {character.status}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Species:</Text>
            <Text numberOfLines={1} style={styles.infoValue}>
              {character.species}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Type:</Text>
            <Text numberOfLines={1} style={styles.infoValue}>
              {character.type ? character.type : '-'}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Gender:</Text>
            <Text numberOfLines={1} style={styles.infoValue}>
              {character.gender}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Location:</Text>
            <Text numberOfLines={1} style={styles.infoValue}>
              {character.location.name}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const mapDispatchToProps = {};
const mapStateToProps = ({character}) => ({character});
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);

const styles = StyleSheet.create({
  card: {flex: 20, alignItems: 'center', justifyContent: 'center'},
  container: {
    alignItems: 'center',
    borderRadius: Metrics.borderRadius,
    borderWidth: 0.5,
    padding: 10,
    width: 200,
    height: Metrics.HEIGHT * 0.6,
  },
  image: {
    borderWidth: 0.5,
    borderRadius: 150,
    overflow: 'hidden',
    width: 150,
    height: 150,
  },
  infoContainer: {},
  infoText: {
    textAlign: 'center',
    padding: Metrics.WIDTH * 0.01,
    fontFamily: Fonts.type.thin,
    fontSize: Fonts.size.medium,
    color: 'rgba(0,0,0,0.6)',
  },
  infoValue: {
    textAlign: 'center',
    padding: Metrics.WIDTH * 0.01,
    color: Colors.TEMPLATE_COLOR,
    marginLeft: Metrics.WIDTH * 0.01,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium,
    marginTop: 5,
  },
});
