import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {Divider, Loader} from '../../components';
import {fetchEpisodeList} from '../../store/actions/episode.actions';

const Home = ({episode: {episodeList, fetching}, fetchEpisodeList}) => {
  useEffect(() => {
    fetchEpisodeList();
  }, [fetchEpisodeList]);

  function Item({name}) {
    return <Text style={styles.title}>{name}</Text>;
  }

  return (
    <View style={styles.container}>
      {fetching && <Loader />}
      <Text> Episode </Text>
      <Divider />
      <FlatList
        data={episodeList}
        renderItem={({item, index}) => <Item key={index} name={item.name} />}
      />
    </View>
  );
};

const mapDispatchToProps = {fetchEpisodeList};
const mapStateToProps = ({episode}) => ({episode});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
