import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var maxwidth = Dimensions.get('screen').width; // width full screen
var maxheight = Dimensions.get('screen').height; // height full screen

import IconProfile from '../assets/images/profile.png';
import Logo from '../assets/images/logo.png';
import IconMenu from '../assets/images/menu.png';
import Bell from '../assets/images/bell.png';
//import data
import {dataSlider, dataService} from '../Datas/dataDashboard';

import Carousel from 'react-native-snap-carousel';
const _renderItemSlide = ({item, index}) => {
  return (
    <View style={styles.item_carousel}>
      <Image
        style={styles.img_item_carousel}
        source={{uri: item.illustration}}
      />
      <Text style={styles.title_carousel}>{item.title}</Text>
    </View>
  );
};
const _renderItemServiceModal = ({item, key}) => {
  return (
    <View style={styles.wrap_item_service_modal}>
       <LinearGradient
            // Button Linear Gradient
            colors={['#FFF', item.color]}
            style={styles.wrap_icon_item_service_modal}>
            <Image style={styles.icon_service_modal} source={item.linkIcon} />
          </LinearGradient>
    </View>
  );
};

const _renderItemService = ({item, key}) => {
  return (
    <View>
      {item && item.type === 'single' ? (
        <View style={styles.wrap_item_service}>
          <LinearGradient
            // Button Linear Gradient
            start={{ x: 0, y: 0}}
            end={{ x: 1, y: 1}}
            colors={['#FFF', item.color]}
            style={styles.wrap_icon_item_service}>
            <Image style={styles.icon_service} source={item.linkIcon} />
          </LinearGradient>

          <Text style={styles.txt_item_service}>{item.title}</Text>
        </View>
      ) : (
        <View style={styles.wrap_item_service}>
          <View
            style={[
              styles.wrap_icon_item_service,
              {backgroundColor: item?.color},
            ]}>
            <FlatList
              columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
              numColumns={4}
              data={item.inclution}
              renderItem={_renderItemServiceModal}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <Text style={styles.txt_item_service}>{item.title}</Text>
        </View>
      )}
    </View>
  );
};

const DashboardForm = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <Image source={IconProfile} />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image style={styles.icon_logo} source={Logo} />
          </View>
          <View style={styles.wrap_bell}>
            <Image style={styles.icon_menu} source={IconMenu} />
            <Image source={Bell} />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Carousel
            layout={'tinder'}
            layoutCardOffset={`9`}
            ref={null}
            data={dataSlider}
            renderItem={_renderItemSlide}
            sliderWidth={maxwidth}
            itemWidth={maxwidth}
            autoplayInterval={true}
          />
        </View>
        <View>
          <Text>Dịch vụ</Text>
          <View style={styles.wrap_service}>
            <FlatList
              columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
              numColumns={4}
              data={dataService}
              renderItem={_renderItemService}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DashboardForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_logo: {
    height: 40,
    width: 80,
    alignSelf: 'center',
  },
  wrap_bell: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  icon_menu: {
    marginHorizontal: 10,
    height: 30,
    width: 30,
  },

  body: {
    flex: 0.6,
    backgroundColor: 'yellow',
  },
  footer: {
    flex: 0.2,
    backgroundColor: 'coral',
  },
  img_logo: {
    height: 20,
    width: 20,
  },
  title_carousel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    position: 'relative',
    bottom: 40,
    left: 10,
    zIndex: 1,
    elevation: 1,
  },
  item_carousel: {
    borderRadius: 8,
  },
  img_item_carousel: {
    width: maxwidth - 40,
    height: 150,
    borderRadius: 8,
  },
  wrap_item_service: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },
  wrap_icon_item_service: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  txt_item_service: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  wrap_item_service_modal: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 20,
  },
  wrap_icon_item_service_modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 12,
    width: 12,
    borderRadius: 1,
  },
  icon_service_modal: {
    height: 5,
    width: 5,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
});
