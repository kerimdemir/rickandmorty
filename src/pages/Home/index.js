import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {Divider, Loader} from '../../components';
import {
  fetchEpisode,
  fetchEpisodeList,
} from '../../store/actions/episode.actions';
import {fetchCharacter} from '../../store/actions/character.actions';

const Home = ({
  episode: {fetching, episodeList, episode},
  character: {character},
  fetchEpisodeList,
  fetchEpisode,
  fetchCharacter,
}) => {
  useEffect(() => {
    fetchEpisodeList();
  }, [fetchEpisodeList]);

  function onEpisodeItemPressed(id) {
    fetchEpisode(id);
  }

  function onCharacterItemPressed(id) {
    fetchCharacter(id);
  }

  function Item({item}) {
    return (
      <View>
        <TouchableOpacity onPress={() => onEpisodeItemPressed(item.id)}>
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
        {episode && item.id == episode.id && (
          <TouchableOpacity
            onPress={() => onCharacterItemPressed(item.id)}
            style={styles.episodeContainer}>
            <Text> {episode.air_date} </Text>
            <Text> {episode.name} </Text>
            <Text> {episode.url} </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {fetching && <Loader />}
      <Text> Episode </Text>
      <Divider />
      <FlatList
        data={episodeList}
        renderItem={({item, index}) => <Item key={index} item={item} />}
      />
    </View>
  );
};

const mapDispatchToProps = {fetchEpisodeList, fetchEpisode, fetchCharacter};
const mapStateToProps = ({episode, character}) => ({episode, character});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
