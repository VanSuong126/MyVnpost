import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import HeaderBackGround from 'assets/images/background_home.png';
import LogoTop from 'assets/images/logoTop.png';
// Import library Linner Gradient
import LinearGradient from 'react-native-linear-gradient';
import { dataService } from 'data/dataHome';
// import Image Slider
var maxwidth = Dimensions.get('screen').width; // width full screen
var maxheight = Dimensions.get('screen').height; // height full screen
import Button from 'react-native-button';
import {SliderBox} from 'react-native-image-slider-box';
const images = [
  'https://ictvietnam.mediacdn.vn/162041676108402688/2020/3/31/vnpost-15856676274091826384576.jpg',
  'https://helenexpress.com/wp-content/uploads/2020/12/vnpost-la-gi.jpg',
];

const HomePage = ({navigation}) => {
  const [ImageActive, setImageActive] = useState(1);
  const onchange = nativeEvent => {
    setImageActive(nativeEvent);
  };
  const _renderItemService = ({item}) => {
    const handelClickModal = value => {
      setDataModal(value);
      setModalVisible(true);
    };
    // Function Handle icon Service
    function handleIconService(nameNavigation) {
      if(nameNavigation==='CreateOrder')
      {
        navigation.navigate(nameNavigation);
      }
      else
      {
        alert('Click Service: ' +nameNavigation)
      }
    }
    return (
      <View>
        {item && item.type === 'single' ? (
          <TouchableOpacity onPress={()=>handleIconService(item.nameNavigation)}>
            <View style={styles.wrap_item_service} key={item.id}>
              <LinearGradient
                // Button Linear Gradient
                start={{x: 0.01, y: 0.1}}
                end={{x: 1, y: 1}}
                colors={['#FFF', item.color]}
                style={styles.wrap_icon_item_service}>
                <Image style={styles.icon_service} source={item.linkIcon} />
              </LinearGradient>

              <Text style={styles.txt_item_service}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => handelClickModal(item.inclution)}>
            <View style={styles.wrap_item_service}>
              <View
                style={[
                  styles.wrap_icon_item_service,
                  {backgroundColor: item?.color},
                ]}>
                <FlatList
                  columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
                  numColumns={3}
                  data={item.inclution}
                  renderItem={_renderItemServiceModal}
                  keyExtractor={item.inclution.id}
                />
              </View>
              <Text style={styles.txt_item_service}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
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
      <FlatList
                columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
                numColumns={3}
                data={dataService}
                renderItem={_renderItemService}
                keyExtractor={dataService.id}
              />
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
    top: 30,
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
  wrap_item_service: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  },
  wrap_icon_item_service: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  txt_item_service: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
