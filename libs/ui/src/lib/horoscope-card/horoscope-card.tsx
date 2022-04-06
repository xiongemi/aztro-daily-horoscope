import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { styles } from 'react-native-style-tachyons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import {
  mapStateToProps,
  mapDispatchToProps,
  HoroscopeCardProps,
} from './horoscope-card.props';

export function HoroscopeCard({
  zodiacItem,
  horoscope,
  loadingStatus,
  getUserHoroscope,
}: HoroscopeCardProps) {
  useEffect(() => {
    if (zodiacItem?.zodiacSign) {
      getUserHoroscope(zodiacItem.zodiacSign, 'today');
    }
  }, [zodiacItem, getUserHoroscope]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Card>
          {zodiacItem && (
            <>
              <Card.Title>
                <Icon name={zodiacItem?.icon} size={40} />
              </Card.Title>
              <Card.Title>{zodiacItem?.zodiacSign}</Card.Title>
            </>
          )}
          <Card.Divider />
          <Text h4 style={[styles.w100, styles.tc]}>
            Your Horoscope for Today
          </Text>
          {loadingStatus === 'loaded' && horoscope ? (
            <>
              <Text style={[styles.mt2, styles.f4]}>
                {horoscope.description}
              </Text>
              <Text style={[styles.mt2]}>Mood: {horoscope.mood}</Text>
              <Text style={[styles.mt2]}>Color: {horoscope.color}</Text>
              <Text style={[styles.mt2]}>
                Compatibility: {horoscope.compatibility}
              </Text>
              <Text style={[styles.mt2]}>
                Lucky Number: {horoscope.luckyNumber}
              </Text>
              <Text style={[styles.mt2]}>
                Lucky Time: {horoscope.luckyTime}
              </Text>
            </>
          ) : loadingStatus === 'error' ? (
            <Text h2>Oops! Something went wrong. Please try agian.</Text>
          ) : (
            <ActivityIndicator size="large" />
          )}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export const HoroscopeCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HoroscopeCard);
