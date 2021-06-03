import {
  AdhZodiacSignItem,
  AdhZodiacSignList,
} from '@aztro-daily-horoscope/models';
import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import {
  ZodiacSignListProps,
  mapDispatchToProps,
} from './zodiac-sign-list.props';

export function ZodiacSignList({ setUserZodiacSign }: ZodiacSignListProps) {
  const keyExtractor = (item: AdhZodiacSignItem) => item.horoscope;

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={AdhZodiacSignList}
      renderItem={({ item }) => (
        <ListItem
          bottomDivider
          onPress={() => setUserZodiacSign(item.horoscope)}
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

export const ZodiacSignListContainer = connect(
  null,
  mapDispatchToProps
)(ZodiacSignList);
