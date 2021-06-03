import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  AdhHoroscopeItem,
  AdhHoroscopeList,
} from '@aztro-daily-horoscope/models';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HoroscopeListProps, mapDispatchToProps } from './horoscope-list.props';

export function HoroscopeList({ setUserHoroscope }: HoroscopeListProps) {
  const keyExtractor = (item: AdhHoroscopeItem) => item.horoscope;

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={AdhHoroscopeList}
      renderItem={({ item }) => (
        <ListItem
          bottomDivider
          onPress={() => setUserHoroscope(item.horoscope)}
        >
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

export const HoroscopeListContainer = connect(
  null,
  mapDispatchToProps
)(HoroscopeList);
