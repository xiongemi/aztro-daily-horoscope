import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { HoroscopeItem } from '../horoscope-item/horoscope-item';
import {
  AdhHoroscopeItem,
  AdhHoroscopeList,
  AdhHoroscope,
} from '@aztro-daily-horoscope/models';

export function HoroscopeList() {
  const [userHoroscope, setUserHoroscope] = useState<AdhHoroscope>();

  const keyExtractor = (item: AdhHoroscopeItem) => item.horoscope;

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={AdhHoroscopeList}
      renderItem={HoroscopeItem}
    />
  );
}

export default HoroscopeList;
