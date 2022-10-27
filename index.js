/**
 * @format
 */
import React from 'react';
import {AppRegistry, YellowBox} from 'react-native';
import {name as appName} from './app.json';
import Navigation from "~navigations/navigation";
import {Provider} from 'react-redux';
// ignore specific yellowbox warnings
console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning:']);
import store from '~redux/store';

const Root = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
AppRegistry.registerComponent(appName, () => Root);
