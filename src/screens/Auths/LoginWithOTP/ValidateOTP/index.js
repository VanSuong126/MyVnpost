import React, {useState, useEffect} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Sizes, Colors} from '../../../../themes';
import InputPhoneNumber from '../../inputs/InputPhoneNumber';
import InputOTP from '../../inputs/InputOTP';
import diaLog from '../../../../helper/diaLog';
const timerValue = 60;

const ValidateOTP =props => {
   const {onResend, isSuccess, error} = props;
   
  return (
    <View style ={styles.container}>
     
    </View>
  );
};

export default ValidateOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.margin,
    marginVertical: Sizes.margin,
    borderRadius: Sizes.radius,
    overflow:'hidden',
  },

});
