// index.js

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App'; // Import component chứa cấu hình React Navigation
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
