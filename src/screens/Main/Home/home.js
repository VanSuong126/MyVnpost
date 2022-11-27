import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BackgroundLogin from '../../../assets/images/backgroundVNPx.png';
import LogoTop from '~assets/images/logoTop.png';

import {Colors, Sizes, Width, Height} from '../../../themes';
import ButtonWithText from '../../../shared/components/buttons/ButtonWithText';
import InputWithIcon from '../../../shared/components/inputs/InputWithIcon';
import Footer from '../../../shared/components/Footer';

const HomePage = ({navigation}) => {
  return (
    <KeyboardAwareScrollView style={styles.Container}>
      <ImageBackground
        resizeMode={'cover'}
        style={styles.headerLogin_background_img}
        source={BackgroundLogin}>
        <View style={styles.headerLogin}>
          <View style={styles.wrapLogo}>
            <Image style={styles.headerLogin_logo} source={LogoTop} />
            <View style={styles.wrapRegister}>
              <Text style={{fontSize: Sizes.text, fontWeight: '500'}}>
                Chưa có tài khoản{' '}
              </Text>
              <Text style={styles.textLink}>Đăng ký ngay</Text>
            </View>
          </View>
          <View style={styles.wrapFormLogin}>
            <View style={styles.formLogin}>
              <InputWithIcon
                type={'text'}
                placeholder={'Tài khoản'}
                nameLeftIcon={'account'}
                colorLeftIcon={Colors.link}
              />
              <InputWithIcon
                type={'password'}
                placeholder={'Mật khẩu'}
                nameLeftIcon={'lock'}
                colorLeftIcon={Colors.link}
                nameRightIcon={'eye'}
              />
              <View style={styles.wrapForgetPass}>
                <Text style={styles.textLink}>Quên mật khẩu</Text>
              </View>
              <ButtonWithText
                styleButton={styles.buttonLogin}
                title={'Đăng nhập'}
              />
              <ButtonWithText
                styleButton={styles.buttonLoginOTP}
                title={'Đăng nhập với OTP'}
              />
            </View>
          </View>
        </View>
        <View style={styles.footerLogin}>
          <Footer />
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  headerLogin: {
    flex: 0.6,
  },
  headerLogin_background_img: {
    flex: 1,
    justifyContent: 'center',
  },
  headerLogin_logo: {
    width: Sizes.logo,
    resizeMode: 'contain',
  },
  wrapLogo: {
    flex: 0.4,
    height: Height * 0.7 * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapFormLogin: {
    flex: 0.6,
    paddingHorizontal: Sizes.padding,
  },
  formLogin: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapRegister: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.padding,
  },
  textLink: {
    fontSize: Sizes.text,
    color: Colors.link,
    fontWeight: '500',
  },
  wrapForgetPass: {
    alignSelf: 'flex-end',
    marginVertical: Sizes.margin,
    paddingHorizontal: Sizes.padding,
  },
  buttonLoginOTP: {
    backgroundColor: 'green',
  },
  footerLogin: {
    flex: 0.4,
    height: Height * 0.4,
  },
  wrap_item_service: {
    flex: 1,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Height / 4,
  },
  wrap_icon_item_service: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Sizes.button,
    width: Sizes.button,
    borderRadius: 8,
  },
  txt_item_service: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
