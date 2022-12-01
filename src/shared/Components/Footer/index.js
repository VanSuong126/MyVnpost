import React, {useState, useLayoutEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import MenuLogin from '../MenuLogin';
import {Sizes, Colors, Height, Width} from '../../../themes';
import FooterImageBackround from '../../../assets/images/background_login_footer.png';

const Footer = props => {
  const {styleFooter} = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.footerImageBackground}
        resizeMode={'cover'}
        source={FooterImageBackround}>
        <MenuLogin />
        <View>
          <Text style={styles.copyRight}>© 2022 Copyright by VanSuongIT</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  footerImageBackground: {
    flex: 1,
  },
  copyRight: {
    fontWeight: 'bold',
    fontSize: Sizes.text,
    color: Colors.white,
    textAlign: 'center',
  },
});
