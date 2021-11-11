import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { Divider, Loader } from "../../components";
import {
  fetchEpisodeList,
} from "../../store/actions/episode.actions";
import EpisodeCard from "../EpisodeCard";
import PromotionCard from "../PromotionCard";

const Home = ({
                navigation,
                episode: { fetching, episodeList },
                fetchEpisodeList,
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
        renderItem={episodes => (
          <EpisodeCard navigation={navigation} item={episodes.item} />
        )}
      />
    </View>
  );
};

const mapDispatchToProps = { fetchEpisodeList };
const mapStateToProps = ({ episode }) => ({ episode });
export default connect(mapStateToProps, mapDispatchToProps)(Home);
