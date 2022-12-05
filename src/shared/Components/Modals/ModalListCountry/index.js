import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";

import HeaderTitle from '../../headers/HeaderTitle';
import {Sizes, Colors, Width, Height} from '../../../../themes';
import {dataCountry} from '../../../../data/dataCountry';

const ModalListCountry = ({visible = false, style, selectItem}) => {

  // Render Country
  const renderCountry = ({item}) => {
    return (
      <TouchableOpacity style={styles.content} key={item.id} onPress ={() =>selectItem(item)}>
        <View style={styles.wrapCountry}>
          <View style={styles.nameCountry}>
            <Text style={styles.textNameCountry}>{item.nameCountry}</Text>
          </View>
          <View style={styles.phoneCode}>
            <Text style={styles.textPhoneCode}>
              +{item.phoneCode}</Text>
          </View>
        </View>
        <View style={styles.line} />
      </TouchableOpacity>
    );
  };
  return (
      <Modal style= {styles.modal} visible={visible}>
          <View style={styles.container}>
            <HeaderTitle
                title= {'Danh muc quoc gia'}
            />
            <FlatList
              data={dataCountry}
              renderItem={renderCountry}
              keyExtractor={item => item.id}
            />
        </View>
      </Modal>
  );
};

export default ModalListCountry;

const styles = StyleSheet.create({
  modal: {
    flex:1,
    margin:0,
    backgroundColor: 'rgba(52, 52, 52,0.5)',
  },
  container: {
    flex:1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
  },
  wrapCountry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:Sizes.padding,
    paddingVertical:Sizes.padding,
  },
  textNameCountry:{
    fontSize:Sizes.text,
    color:Colors.dark,
  },
  textPhoneCode:{
    fontSize:Sizes.text,
    color:Colors.danger,
  },
  line: {
    borderWidth: Sizes.border,
    borderColor: Colors.border,
    width: Width,
  },
});
