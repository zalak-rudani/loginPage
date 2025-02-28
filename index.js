/**
 * @format
 */
import './gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Store from './src/redux/Store';
import {Provider} from 'react-redux';

const AppRedux = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);
