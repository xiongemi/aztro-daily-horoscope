import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ActivityIndicator, Avatar, Card, DataTable, Divider, Text } from 'react-native-paper';
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
              <Avatar.Icon icon={zodiacItem?.icon} size={40} />
              <Card.Title title={zodiacItem?.zodiacSign}></Card.Title>
            </>
          )}
          <Divider />
          <Text>Your Horoscope for Today</Text>
          {loadingStatus === 'loaded' && horoscope ? (
            <>
              <Text variant="bodyLarge">{horoscope.description}</Text>
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell>Mood</DataTable.Cell>
                  <DataTable.Cell>{horoscope.mood}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Color</DataTable.Cell>
                  <DataTable.Cell>{horoscope.color}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Compatibility</DataTable.Cell>
                  <DataTable.Cell>{horoscope.compatibility}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Lucky Number</DataTable.Cell>
                  <DataTable.Cell>{horoscope.luckyNumber}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Lucky Time</DataTable.Cell>
                  <DataTable.Cell>{horoscope.luckyTime}</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </>
          ) : loadingStatus === 'error' ? (
            <Text variant="displayMedium">
              Oops! Something went wrong. Please try again.
            </Text>
          ) : (
            <ActivityIndicator animating={true} size="large" />
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
