import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { HoroscopeItem } from '../horoscope-item/horoscope-item';
import { AdhHoroscopeItem } from '../models/horoscope-item.interface';
import { AdhHoroscopeList } from '../models/horoscope-list.const';
import { AdhHoroscope } from '../models/horoscope.enum';

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
