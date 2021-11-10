import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Divider} from '../../components';
import {Colors, Fonts, Images} from '../../themes';
import Metrics from '../../themes/metrics';

function PromotionCard({item}) {
  
  return (
    <View style={styles.promotionCardContainer}>
      <Image style={styles.imageContainer} source={Images.rick_and_morty} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          Ricky and Morty
          <Text style={styles.yearText}> (2013 -)</Text>
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoView}>
            <Text style={styles.infoText}>Original language:</Text>
            <Text style={styles.infoValue}>English</Text>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.infoText}>No. of seasons:</Text>
            <Text style={styles.infoValue}>5</Text>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.infoText}>No. of episodes:</Text>
            <Text style={styles.infoValue}>41</Text>
          </View>
        </View>
        <Divider />
      </View>
    </View>
  );
}

export default PromotionCard;

const styles = StyleSheet.create({
  promotionCardContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 140,
    height: 120,
  },

  textContainer: {
    marginLeft: Metrics.WIDTH * 0.01,
  },
  titleText: {
    color: Colors.TEMPLATE_COLOR,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.large,
  },
  yearText: {
    color: '#000',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium,
  },
  infoView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  infoText: {
    padding: Metrics.WIDTH * 0.01,
    fontFamily: Fonts.type.thin,
    fontSize: Fonts.size.medium,
    color: 'rgba(0,0,0,0.6)',
  },
  infoValue: {
    color: Colors.TEMPLATE_COLOR,
    marginLeft: Metrics.WIDTH * 0.01,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium,
  },
});
