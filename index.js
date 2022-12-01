/**
 * @format
 */
import React from 'react';
import {AppRegistry, SafeAreaView, LogBox} from 'react-native';
import {name as appName} from './app.json';

import './src/helper/i18n';
import {Colors} from '~themes';
import Navigation from "~navigators";
import Network from '~shared/components/Network';
// ignore specific yellowbox warnings
LogBox.ignoreAllLogs();

import _ from 'lodash';
global._ = _;
import MenuLogin from './src/shared/components/MenuLogin';
import InputPhoneNumber from './src/shared/components/inputs/InputPhoneNumber';
const Root = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
    <Network/>
    <Navigation/>
</SafeAreaView>
);
AppRegistry.registerComponent(appName, () => InputPhoneNumber);
