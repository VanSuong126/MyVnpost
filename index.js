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
import Icon from 'react-native-vector-icons/FontAwesome';

const Root = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
   <Icon name="rocket" size={30} color="#900" />
    <Network/>
    <Navigation/>
</SafeAreaView>
);
AppRegistry.registerComponent(appName, () => Root);
