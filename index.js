/**
 * @format
 */
import React from 'react';
import {AppRegistry, YellowBox} from 'react-native';
import {name as appName} from './app.json';
import HomePage from './Components/home';
import Navigation from './Components/navigation';
import {Provider} from 'react-redux';
// ignore specific yellowbox warnings
console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning:']);
import store from './Redux/store';

const Root = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
AppRegistry.registerComponent(appName, () => Root);
