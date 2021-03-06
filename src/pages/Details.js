import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Divider, Loader} from '../components';
import {fetchEpisode} from '../store/actions/episode.actions';
import {
  fetchCharacter,
  clearCharacter,
} from '../store/actions/character.actions';
import EpisodeCard from './EpisodeCard';
import {Metrics, Colors, Fonts, Images} from '../themes';
import CharacterCard from './CharacterCard';

const Details = ({
  navigation,
  route,
  episode: {fetching, episode},
  character: {character},
  fetchEpisode,
  fetchCharacter,
  clearCharacter,
}) => {
  const {episodeId} = route.params;
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    fetchEpisode(episodeId);

    return () => {
      clearCharacter();
    };
  }, [fetchEpisode]);

  function onItemPressed(url) {
    fetchCharacter(url);
    let id = url.split('/')[5];
    setSelectedId(id);
  }

  function itemBackgroundColor(id) {
    if (selectedId == id) {
      return Colors.TEMPLATE_COLOR;
    } else {
      return 'white';
    }
  }

  function renderItem(item) {
    return (
      <TouchableOpacity
        style={styles.episodeCardContainer}
        activeOpacity={0.8}
        onPress={() => onItemPressed(item)}>
        <View
          style={{
            ...styles.imageContainer,
            backgroundColor: itemBackgroundColor(item.split('/')[5]),
          }}>
          <Text style={styles.subTitle}> Character {item.split('/')[5]}</Text>
          <Text style={styles.arrowIcon}> ➜ </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {fetching ? (
        <Loader />
      ) : (
        episode && <EpisodeCard navigation={navigation} item={episode} />
      )}
      <Text style={styles.episodeText}>Characters </Text>
      <Divider />
      <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
        <FlatList
          numColumns={1}
          showsVerticalScrollIndicator={false}
          data={episode && episode.characters}
          renderItem={(episodes, index) => renderItem(episodes.item, index)}
        />

        {character && <CharacterCard />}
      </View>
    </View>
  );
};

const mapDispatchToProps = {fetchEpisode, fetchCharacter, clearCharacter};
const mapStateToProps = ({episode, character}) => ({episode, character});
export default connect(mapStateToProps, mapDispatchToProps)(Details);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.WIDTH * 0.02,
    paddingVertical: Metrics.HEIGHT * 0.02,
  },
  episodeCardContainer: {
    flexDirection: 'row',
    margin: Metrics.WIDTH * 0.015,
  },
  episodeText: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium,
    marginTop: Metrics.HEIGHT * 0.01,
  },
  imageContainer: {
    backgroundColor: '#FFF',
    borderRadius: Metrics.borderRadius,
    borderWidth: 0.5,
    width: 140,
    borderColor: '#928f8f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {},

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
  arrowIcon: {
    color: 'rgba(0,0,0,0.6)',
  },
});
