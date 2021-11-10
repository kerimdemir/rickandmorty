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
import EpisodeCard from './EpisodeCard';
import PromotionCard from './PromotionCard';

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

  return (
    <View style={styles.container}>
      {fetching && <Loader />}
      <PromotionCard />
      <Text>Episode List </Text>
      <FlatList
        data={episodeList}
        renderItem={episodes => <EpisodeCard item={episodes.item} />}
      />
    </View>
  );
};

const mapDispatchToProps = {fetchEpisodeList, fetchEpisode, fetchCharacter};
const mapStateToProps = ({episode, character}) => ({episode, character});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
