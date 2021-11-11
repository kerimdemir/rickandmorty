import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {Colors, Fonts} from '../../themes';
import Metrics from '../../themes/metrics';

function EpisodeCard({item, navigation}) {
  function onEpisodeItemPressed(id) {
    navigation.navigate('Details', {episodeId: id});
  }

  return (
    <TouchableOpacity
      style={styles.episodeCardContainer}
      activeOpacity={0.8}
      onPress={() => onEpisodeItemPressed(item.id)}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://tr.web.img4.acsta.net/c_210_280/pictures/18/10/31/17/34/2348073.jpg',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {' ' + item.episode}-{item.name}
        </Text>
        <Text style={styles.subTitle}>{item.air_date}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default EpisodeCard;

const styles = StyleSheet.create({
  episodeCardContainer: {
    width: '80%',
    flexDirection: 'row',
    marginVertical: Metrics.WIDTH * 0.02,
  },
  imageContainer: {},
  textContainer: {},
  image: {
    borderRadius: Metrics.borderRadius,
    overflow: 'hidden',
    width: 120,
    height: 120,
  },
  subTitle: {
    marginLeft: Metrics.WIDTH * 0.01,
    padding: Metrics.WIDTH * 0.01,
    fontFamily: Fonts.type.thin,
    fontSize: Fonts.size.medium,
    color: 'rgba(0,0,0,0.6)',
  },
  title: {
    marginLeft: Metrics.WIDTH * 0.01,
    color: Colors.TEMPLATE_COLOR,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
  },
});
