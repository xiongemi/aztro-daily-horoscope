import { AdhZodiacSign } from '@aztro-daily-horoscope/models';
import React from 'react';
import { Card, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/* eslint-disable-next-line */
export interface HoroscopeCardProps {}

export function HoroscopeCard(props: HoroscopeCardProps) {
  return (
    <Card>
      <Card.Title>
        <Icon name="zodiac-leo" size={40} />
      </Card.Title>
      <Card.Title>{AdhZodiacSign.Leo}</Card.Title>
      <Card.Divider />
      <Text h4 style={{ width: '100%', textAlign: 'center' }}>
        Your Horoscope for Today
      </Text>
    </Card>
  );
}

export default HoroscopeCard;
