import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import RNRestart from 'react-native-restart';
import NetInfo from "@react-native-community/netinfo";
import { useTranslation } from 'react-i18next';


import { Text } from '~shared/components/MyStyle'
import { Colors, Sizes } from '~themes'

const Network = () => {

  const { t } = useTranslation();

  const opacity = new Animated.Value(0);
  const [isConnect, setStatusNetwork] = useState(true);
  const height = Sizes.tab;

  useEffect(() => {
    onChangeHeight();
  }, [isConnect])

  useEffect(() => {
    NetInfo.addEventListener(async (state) => {
      console.log("Is network connected?", state.isConnected);
      const currentStatus = state.isConnected;

      if (currentStatus === isConnect) return;
      await setStatusNetwork(currentStatus);
      // Reload app when network is connect return
      if (currentStatus) {
        RNRestart.Restart();
      }
    });
  })

  const onChangeHeight = () => {
    Animated.timing(
      opacity,
      {
        toValue: (isConnect) ? 0 : height,
        duration: 250,
        useNativeDriver: false,
      },
    ).start();
  }

  return (
    <Animated.View
      style={[{ height: opacity }, styles.container]}>
      <Text bold textWhite>{t('disconnected')}</Text>
    </Animated.View >
  )
}

const styles = {
  container: {
    backgroundColor: Colors.default,
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default (Network);

