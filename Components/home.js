import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import HeaderBackGround from '../assets/images/background_home.png';
import LogoTop from '../assets/images/logoTop.png';
import Icon_Search from '../assets/images/zoom.png';
import Icon_Board from '../assets/images/board.png';
import Icon_Info from '../assets/images/info.png';
import Icon_Mail from '../assets/images/mail.png';
import Icon_Question from '../assets/images/question.png';
import Icon_Tracking from '../assets/images/tracking.png';
// import Image Slider
import Slider1 from '../assets/images/slider1.png';
import Slider2 from '../assets/images/slider2.png';
import Slider3 from '../assets/images/slider3.png';
var maxwidth = Dimensions.get('screen').width; // width full screen
var maxheight = Dimensions.get('screen').height; // height full screen
import Button from 'react-native-button';
import {SliderBox} from 'react-native-image-slider-box';

const images = [Slider1, Slider2, Slider3];

const HomePage = ({navigation}) => {
  const [ImageActive, setImageActive] = useState(1);
  const onchange = nativeEvent => {
    setImageActive(nativeEvent);
  };
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
        <Image style={styles.img_background_h1} source={HeaderBackGround} />
        <Image style={styles.img_logoTop} source={LogoTop} />
      </View>
      <View style={styles.body}>
          <Button
            onPress={() => {
              navigation.navigate('Login');
            }}
            containerStyle={styles.wrap_btn_login}
            style={styles.txt_login}>
            Đăng nhập
          </Button>
        <View style={styles.wrap}>
          <SliderBox
            containerCustomStyle={styles.Slider}
            images={images}
            sliderBoxHeight={maxheight * 0.45}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            autoplay
            circleLoop
            dotStyle={{
              display: 'none',
            }}
            parentWidth={maxwidth - 40}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.wrap_icon}>
          <View style={styles.wrap_detail_menu}>
            <View style={styles.wrap_icon_search}>
              <Image style={styles.img_search} source={Icon_Search} />
            </View>
            <Text style={styles.txt_title_menu}>Tra cứu bưu cục</Text>
          </View>
          <View style={styles.wrap_detail_menu}>
            <View style={styles.wrap_icon_board}>
              <Image style={styles.img_board} source={Icon_Board} />
            </View>
            <Text style={styles.txt_title_menu}>Bảng giá</Text>
          </View>
          <View style={styles.wrap_detail_menu}>
            <View style={styles.wrap_icon_question}>
              <Image style={styles.img_search} source={Icon_Question} />
            </View>
            <Text style={styles.txt_title_menu}>Hỏi đáp</Text>
          </View>
        </View>
        <View style={styles.wrap_icon}>
          <View style={styles.wrap_detail_menu}>
            <View style={styles.wrap_icon_mail}>
              <Image style={styles.img_search} source={Icon_Mail} />
            </View>
            <Text style={styles.txt_title_menu}>Có gì mới</Text>
          </View>
          <View style={styles.wrap_detail_menu}>
            <View style={styles.wrap_icon_info}>
              <Image style={styles.img_board} source={Icon_Info} />
            </View>
            <Text style={styles.txt_title_menu}>Thông tin ứng dụng</Text>
          </View>
          <View style={styles.wrap_detail_menu}>
            <View style={styles.wrap_icon_tracking}>
              <Image style={styles.img_search} source={Icon_Tracking} />
            </View>
            <Text style={styles.txt_title_menu}>Tính thử cước</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  img_background_h1: {
    height: maxheight / 5,
    width: maxwidth,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
    zIndex: -1,
    elevation: -1,
  },
  body: {
    flex: 0.5,
    position: 'relative',
    bottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  img_logoTop: {
    position: 'absolute',
    top: 40,
    height: 50,
    width: 100,
  },
  txt_login: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'orange',
  },
  wrap_btn_login: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 130,
    backgroundColor: '#FFF',
    borderRadius: 50,
    zIndex: 2,
    elevation: 2,
  },
  Slider: {
    borderRadius: 8,
  },
  wrap: {
    position: 'relative',
    bottom: 20,
    marginHorizontal: 20,
    borderRadius: 2,
    zIndex: -1,
    elevation: -1,
  },
  footer: {
    flex: 0.3,
  },
  wrap_icon: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  wrap_icon_search: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#FF9933',
  },
  wrap_icon_board: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#C9E4D6',
  },
  wrap_icon_question: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: 'pink',
  },
  wrap_icon_mail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#DD0000',
  },
  wrap_icon_info: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#00DD00',
  },
  wrap_icon_tracking: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: '#CCCC00',
  },
  wrap_detail_menu: {
    width: 100,
    alignItems: 'center',
  },
  txt_title_menu: {
    fontSize: 12,
  },
});
