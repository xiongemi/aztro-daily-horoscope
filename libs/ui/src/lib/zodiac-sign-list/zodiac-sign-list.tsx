import {
  AdhZodiacSignItem,
  AdhZodiacSignList,
  AppRoutes,
} from '@aztro-daily-horoscope/models';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';
import { connect } from 'react-redux';

import {
  ZodiacSignListProps,
  mapDispatchToProps,
} from './zodiac-sign-list.props';

export function ZodiacSignList({ setUserZodiacSignItem }: ZodiacSignListProps) {
  const navigation = useNavigation();

  const keyExtractor = (item: AdhZodiacSignItem) => item.zodiacSign;

  const zodiacListItemPress = (item: AdhZodiacSignItem) => {
    navigation.navigate(AppRoutes.card);
    setUserZodiacSignItem(item);
  };

  return (
    <FlatList
      testID="zodiac-sign-list"
      keyExtractor={keyExtractor}
      data={AdhZodiacSignList}
      renderItem={({ item }) => (
        <List.Item
          title={item.zodiacSign}
          left={(props) => <List.Icon {...props} icon={item.icon} />}
          right={(props) => <List.Icon {...props} icon='chevron-right' />}
          onPress={() => zodiacListItemPress(item)}
        ></List.Item>
      )}
    />
  );
}

export const ZodiacSignListContainer = connect(
  null,
  mapDispatchToProps
)(ZodiacSignList);
