import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
var maxwidth = Dimensions.get('screen').width; // width full screen
var maxheight = Dimensions.get('screen').height; // height full screen
// import image form login
import BackgroundLogin from '../assets/images/background_login.png';
import ArrowBack from '../assets/images/back.png';
import Logo from '../assets/images/logoTop.png';
import Icon_Account from '../assets/images/account.png';
import Icon_Pass from '../assets/images/lock.png';
import Icon_Facebook from '../assets/images/facebook.png';
import Icon_Zalo from '../assets/images/zalo.png';
import Icon_Info from '../assets/images/icon_info.png';
import {useDispatch, useSelector} from 'react-redux';
//import {loginAction} from '../Redux/ToolKit/loginSlice';
import {isLoginSuccess} from '../redux/selector';
import {loginApp} from '../redux/action';

const LoginForm = ({navigation}) => {
  // useState
  const [valueUsername, setValueUserName] = useState('');
  const [valuePassword, setValuePassWord] = useState('');
  const [Token, setToken] = useState('');
  const User = {
    Username: valueUsername,
    Password: valuePassword,
    TokenAccess: Token,
  };
  // useDisPatch
  const dispatch = useDispatch();
  function handleChangeTextUser(value) {
    setValueUserName(value);
  }
  function handleChangeTextPass(value) {
    setValuePassWord(value);
  }
  function handleClickButtonLogin() {
    CallApiLoginVnpost(valueUsername, valuePassword);
    dispatch(loginApp(User));
  }

  // Call api login
  function CallApiLoginVnpost(Username, Password) {
    if (Username !== '' && Password !== '') {
      var axios = require('axios');
      var data = JSON.stringify({
        TenDangNhap: Username,
        MatKhau: Password,
      });
      var config = {
        method: 'post',
        url: 'https://donhang.vnpost.vn/api/api/MobileAuthentication/GetAccessToken',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          setToken(JSON.stringify(response.data.Token));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  const Access = useSelector(isLoginSuccess);
  useEffect(() => {
    if (Access === true) navigation.navigate('Dashboard');
  }, [Access]);
  return (
    <View style={styles.Container}>
      <View style={styles.wrap_content}>
        <View style={styles.wrap_img_background}>
          <Image style={styles.img_background} source={BackgroundLogin} />
        </View>
        <View style={styles.content}>
          <View style={styles.wrap_nav_header}>
            <TouchableOpacity
              style={styles.wrap_back}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image style={styles.img_arrow_back} source={ArrowBack} />
              <Text style={styles.txt_back}>Quay lại</Text>
            </TouchableOpacity>
            <Text style={styles.txt_res}>Đăng ký</Text>
          </View>
          <View style={styles.header}>
            <View style={styles.wrap_logo}>
              <Image style={styles.img_logo} source={Logo} />
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.wrap_info_enter}>
              <View style={styles.wrap_account}>
                <View style={styles.wrap_img_account}>
                  <Image style={styles.img_account} source={Icon_Account} />
                </View>
                <TextInput
                  style={styles.txt_account}
                  placeholder="Tên đăng nhập"
                  value={valueUsername}
                  onChangeText={text => handleChangeTextUser(text)}
                />
              </View>
              <View style={styles.wrap_pass}>
                <View style={styles.wrap_img_pass}>
                  <Image style={styles.img_pass} source={Icon_Pass} />
                </View>
                <TextInput
                  secureTextEntry={true}
                  style={styles.txt_pass}
                  placeholder="Mật khẩu"
                  value={valuePassword}
                  onChangeText={text => handleChangeTextPass(text)}
                />
              </View>
            </View>
            <View style={styles.warp_button}>
              <TouchableOpacity onPress={() => handleClickButtonLogin()}>
                <View style={styles.btn_login}>
                  <Text style={styles.txt_btn_login}>Đăng nhập</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.wrap_forget_pass}>
                <Text style={styles.txt_forget_pass}>Quên mật khẩu?</Text>
              </View>
              <View style={styles.wrap_or}>
                <View style={styles.line}></View>
                <Text>Hoặc đăng nhập với</Text>
                <View style={styles.line}></View>
              </View>
              <View style={styles.btn_login}>
                <Text style={styles.txt_btn_login}>Đăng nhập với PostID</Text>
              </View>
              <View style={styles.wrap_btn_login_social}>
                <View style={styles.btn_fb}>
                  <Image style={styles.img_fb} source={Icon_Facebook} />
                  <Text style={styles.txt_btn_fb}>Facebook</Text>
                </View>
                <View style={styles.btn_zalo}>
                  <Image style={styles.img_zalo} source={Icon_Zalo} />
                  <Text style={styles.txt_btn_zalo}>Zalo</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.wrap_company}>
              <Image source={Icon_Info} />
              <Text style={styles.txt_company}>
                {' '}
                TỔNG CÔNG TY BƯU ĐIỆN VIỆT NAM{' '}
              </Text>
              <Text style={styles.txt_version}>(1.4.2)</Text>
            </View>
            <Text style={styles.txt_address}>
              Số 5, Phạm Hùng - Mỹ Đình 2 - Nam Từ Liêm - Hà Nội
            </Text>
            <Text style={styles.txt_hotline}>Hotline: 1900545481</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default LoginForm;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  wrap_content: {
    flex: 1,
    zIndex: 2,
    elevation: 2,
  },
  wrap_img_background: {
    flex: 1,
    backgroundColor: 'violet',
    zIndex: -1,
    elevation: -1,
  },
  img_background: {
    resizeMode: 'cover',
    height: maxheight,
    width: maxwidth,
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: maxheight,
    width: maxwidth,
    position: 'absolute',
    backgroundColor: 'orange',
    opacity: 0.9,
  },
  header: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap_nav_header: {
    flexDirection: 'row',
  },
  wrap_back: {
    flexDirection: 'row',
  },
  txt_back: {
    marginLeft: 10,
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  txt_res: {
    position: 'absolute',
    right: 2,
    fontSize: 14,
    color: '#FFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  wrap_logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 0.5,
  },
  img_logo: {
    height: 100,
    width: 200,
    resizeMode: 'contain',
  },
  wrap_info_enter: {
    marginTop: 20,
  },
  wrap_account: {
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
  },
  wrap_img_account: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
  txt_account: {
    flex: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: 40,
    fontSize: 14,
    backgroundColor: '#FFF',
  },
  wrap_pass: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
  },
  wrap_img_pass: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
  },
  txt_pass: {
    flex: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    height: 40,
    fontSize: 14,
    backgroundColor: '#FFF',
  },
  warp_button: {
    marginTop: 10,
  },
  btn_login: {
    marginTop: 10,
    backgroundColor: 'darkblue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txt_btn_login: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wrap_forget_pass: {
    marginTop: 5,
    alignItems: 'flex-end',
  },
  txt_forget_pass: {
    color: '#FFF',
    fontSize: 14,
  },
  wrap_or: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  line: {
    backgroundColor: '#FFF',
    height: 2,
    width: maxwidth / 2 - 90,
    marginHorizontal: 5,
  },
  wrap_btn_login_social: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn_fb: {
    flexDirection: 'row',
    backgroundColor: '#1E4BA0',
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txt_btn_fb: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btn_zalo: {
    backgroundColor: 'blue',
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  txt_btn_zalo: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  img_fb: {
    position: 'relative',
    right: 20,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  img_zalo: {
    position: 'relative',
    right: 20,
    borderColor: '#FFF',
    height: 24,
    width: 24,
  },
  btn_zalo: {
    flexDirection: 'row',
    backgroundColor: '#0788CC',
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  footer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap_company: {
    flexDirection: 'row',
  },
  txt_company: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  txt_version: {
    fontSize: 12,
  },
  txt_address: {
    fontSize: 12,
  },
  txt_hotline: {
    fontSize: 12,
  },
});
