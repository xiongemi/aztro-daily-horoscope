import { HoroscopeList } from '@aztro-daily-horoscope/ui';

export function App() {
  return (
    <>
      <style type="text/css">{`
  @font-face {
    font-family: 'MaterialIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
  }
`}</style>
      <HoroscopeList />
    </>
  );
}

export default App;
