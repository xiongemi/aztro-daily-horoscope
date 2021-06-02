import React from 'react';
import { FlatList } from 'react-native';
import {
  AdhHoroscopeItem,
  AdhHoroscopeList,
} from '@aztro-daily-horoscope/models';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function HoroscopeList() {
  const keyExtractor = (item: AdhHoroscopeItem) => item.horoscope;

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={AdhHoroscopeList}
      renderItem={({ item, index }) => (
        <ListItem key={index} bottomDivider>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.horoscope}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      )}
    />
  );
}

export default HoroscopeList;
