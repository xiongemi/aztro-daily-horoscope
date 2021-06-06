import { AppRegistry, StyleSheet } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';

import App from './app/app';

NativeTachyons.build({}, StyleSheet);

AppRegistry.registerComponent('main', () => App);
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root'),
});
