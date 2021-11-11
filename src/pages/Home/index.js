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
  navigation,
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
      <Text style={styles.episodeText}>Episode List </Text>
      <Divider />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={episodeList}
        renderItem={episodes => <EpisodeCard navigation={navigation} item={episodes.item} />}
      />
    </View>
  );
};

const mapDispatchToProps = {fetchEpisodeList, fetchEpisode, fetchCharacter};
const mapStateToProps = ({episode, character}) => ({episode, character});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
