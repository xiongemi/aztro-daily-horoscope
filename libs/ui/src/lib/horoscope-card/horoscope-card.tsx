import { LoadingStatus } from '@aztro-daily-horoscope/store';
import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';
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
    getUserHoroscope('today');
  }, [getUserHoroscope]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Card>
          <Card.Title>
            <Icon name={zodiacItem?.icon} size={40} />
          </Card.Title>
          <Card.Title>{zodiacItem?.zodiacSign}</Card.Title>
          <Card.Divider />
          <Text h4 style={{ width: '100%', textAlign: 'center' }}>
            Your Horoscope for Today
          </Text>
          {loadingStatus === LoadingStatus.Success ? (
            <>
              <Text style={{ marginTop: 10 }}>{horoscope.description}</Text>
              <Text style={{ marginTop: 10 }}>Mood: {horoscope.mood}</Text>
              <Text style={{ marginTop: 10 }}>Color: {horoscope.color}</Text>
              <Text style={{ marginTop: 10 }}>
                Compatibility: {horoscope.compatibility}
              </Text>
              <Text style={{ marginTop: 10 }}>
                Lucky Number: {horoscope.luckyNumber}
              </Text>
              <Text style={{ marginTop: 10 }}>
                Lucky Time: {horoscope.luckyTime}
              </Text>
            </>
          ) : loadingStatus === LoadingStatus.Error ? (
            <Text h2>Oops! Something went wrong. Please try agian.</Text>
          ) : (
            <ActivityIndicator />
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
