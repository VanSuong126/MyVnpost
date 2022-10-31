/**
 * @format
 */
import React from 'react';
import {AppRegistry,View, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';

import './src/helper/i18n';
import {Colors} from '~themes';
import Navigation from "~navigators";
import Network from '~shared/components/Network';
import _ from 'lodash';
global._ = _;

const Root = () => (
  <View style={{ flex: 1, backgroundColor: Colors.white }}>
    <Network/>
    <Navigation/>
</View>
);
AppRegistry.registerComponent(appName, () => Root);
