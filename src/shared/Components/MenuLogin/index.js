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
import { useTranslation } from 'react-i18next';
import {dataService} from '~data/dataHome';

import IconVector, {
  IconType,
} from '../../../shared/components/icons/IconVector';
import {Colors, Sizes, Width, Height} from '../../../themes';

const MenuLogin = props => {
  const { t } = useTranslation();
  const _renderItemService = ({item}) => {
    const handelClickModal = value => {
      setDataModal(value);
      setModalVisible(true);
    };
    // Function Handle icon Service
    function handleIconService(nameNavigation) {
      if (nameNavigation === 'CreateOrder') {
        navigation.navigate(nameNavigation);
      } else {
        alert('Click Service: ' + nameNavigation);
      }
    }
    return (
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        {item && item.type === 'single' ? (
          <TouchableOpacity
            onPress={() => handleIconService(item.nameNavigation)}>
            <View style={styles.wrap_item_service} key={item.id}>
              <View
                style={styles.wrap_icon_item_service}>
                <IconVector
                  name={item.nameIcon}
                  type={IconType.fontAwesome}
                  size={Sizes.icon}
                  color={Colors.white}
                />
              </View>

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
    <View style={styles.container}>
      <FlatList
                columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
                numColumns={3}
                data={dataService}
                renderItem={_renderItemService}
                keyExtractor={dataService.id}
              />
    </View>
  );
};
export default MenuLogin;

const styles = StyleSheet.create({
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
    fontSize: Sizes.text,
    color:Colors.white,
    fontWeight: '500',
    textAlign: 'center',
  },
});