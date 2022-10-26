import React, {Component, useState} from 'react';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
// Import library Linner Gradient
import LinearGradient from 'react-native-linear-gradient';
// Get full Screen
var maxwidth = Dimensions.get('screen').width; // width full screen
var maxheight = Dimensions.get('screen').height; // height full screen
// import Icon
import IconProfile from 'assets/images/profile.png';
import Logo from 'assets/images/logo.png';
import IconMenu from 'assets/images/menu.png';
import Bell from 'assets/images/bell.png';
//import data
import {dataSlider, dataService, actions} from 'data/dataDashboard';
// import library Carousel
import Carousel from 'react-native-snap-carousel';
// import library Floating action
import {FloatingAction} from 'react-native-floating-action';
import {useDispatch} from 'react-redux';
import {set} from 'immer/dist/internal';

const _renderItemSlide = ({item}) => {
  return (
    <View style={styles.item_carousel} key={item.id}>
      <Image
        style={styles.img_item_carousel}
        source={{uri: item.illustration}}
      />
      <Text style={styles.title_carousel}>{item.title}</Text>
    </View>
  );
};
const _renderItemServiceModal = ({item}) => {
  return (
    <View style={styles.wrap_item_service_modal} key={item.id}>
      <LinearGradient
        colors={['#FFF', item.color]}
        style={styles.wrap_icon_item_service_modal}>
        <Image style={styles.icon_service_modal} source={item.linkIcon} />
      </LinearGradient>
    </View>
  );
};

// Screen Dashboard

const DashboardForm = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [dataModal, setDataModal] = useState([]);
  // Render Service from FlatList
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
  const _renderItemServiceModalUp = ({item}) => {
    return (
      <View style={styles.wrap_item_service} key={item.id}>
        <LinearGradient
          // Button Linear Gradient
          start={{x: 0.01, y: 0.1}}
          end={{x: 1, y: 1}}
          colors={['#FFF', item.color]}
          style={styles.wrap_icon_item_service}>
          <Image style={styles.icon_service} source={item.linkIcon} />
        </LinearGradient>

        <Text style={styles.txt_item_service_up}>{item.title}</Text>
      </View>
    );
  };

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
        <ScrollView>
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
            <Text style={styles.txt_service}>Dịch vụ</Text>
            <View style={styles.wrap_service}>
              <FlatList
                columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
                numColumns={4}
                data={dataService}
                renderItem={_renderItemService}
                keyExtractor={dataService.id}
              />
              <FloatingAction
                color={'orange'}
                actions={actions}
                onPressItem={name => {
                  console.log(`selected button: ${name}`);
                }}
              />
              <View style={styles.wrap_modal}>
                <Modal
                  isVisible={isModalVisible}
                  style={styles.modal}
                  onBackdropPress={() => setModalVisible(false)}>
                  <View style={styles.wrap_item_modal}>
                    <FlatList
                      columnWrapperStyle={{
                        flex: 1,
                        justifyContent: 'space-around',
                      }}
                      numColumns={3}
                      data={dataModal}
                      renderItem={_renderItemServiceModalUp}
                      keyExtractor={dataService.id}
                    />
                  </View>
                </Modal>
              </View>
            </View>
          </View>
        </ScrollView>
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
  wrap_item_service_modal_up: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 20,
  },
  wrap_icon_item_service_modal_up: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 12,
    width: 12,
    borderRadius: 1,
  },
  icon_service_modal_up: {
    height: 5,
    width: 5,
  },
  txt_service: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
  wrap_modal: {},
  modal: {
    flex: 1,
  },
  wrap_item_modal: {
    flex: 0.3,
    backgroundColor: '#00000070',
    borderRadius: 20,
    marginHorizontal: 50,
  },
  txt_item_service_up: {
    marginTop: 10,
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'top',
    fontWeight: 'bold',
  },
});
