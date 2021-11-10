import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {Divider, Loader} from '../../components';
import {
  fetchEpisode,
  fetchEpisodeList,
} from '../../store/actions/episode.actions';

const Home = ({
  episode: {fetching, episodeList, episode},
  fetchEpisodeList,
  fetchEpisode,
}) => {
  useEffect(() => {
    fetchEpisodeList();
  }, [fetchEpisodeList]);

  function onItemPressed(id) {
    fetchEpisode(id);
  }

  function Item({item}) {
    return (
      <View>
        <TouchableOpacity onPress={() => onItemPressed(item.id)}>
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
        {episode && item.id == episode.id && (
          <View style={styles.episodeContainer}>
            <Text> {episode.air_date} </Text>
            <Text> {episode.name} </Text>
            <Text> {episode.url} </Text>
          </View>
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

const mapDispatchToProps = {fetchEpisodeList, fetchEpisode};
const mapStateToProps = ({episode}) => ({episode});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
