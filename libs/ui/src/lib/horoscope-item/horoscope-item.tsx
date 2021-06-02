import React from 'react';
import { ListItem } from 'react-native-elements';
import { AdhHoroscopeItem } from '@aztro-daily-horoscope/models';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface HoroscopeItemProps {
  item: AdhHoroscopeItem;
}

export function HoroscopeItem({ item }: HoroscopeItemProps) {
  return (
    <ListItem key={item.horoscope} bottomDivider>
      <Icon name={item.icon} />
      <ListItem.Content>
        <ListItem.Title>{item.horoscope}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
}

export default HoroscopeItem;
