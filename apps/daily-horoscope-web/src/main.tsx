import { AppRegistry } from 'react-native';

import App from './app/app';

AppRegistry.registerComponent('main', () => App);
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root'),
});
