import React, {useState, useEffect} from 'react';
import {phone} from 'phone';
import {View, Modal, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Sizes, Colors} from '../../../../themes';
import InputPhoneNumber from '../../inputs/InputPhoneNumber';
import ModalListCountry from '../../modals/ModalListCountry';
import InputOTP from '../../inputs/InputOTP';
import {dataCountry} from '../../../../data/dataCountry';
import diaLog from '../../../../helper/diaLog';
const timerValue = 5;

const ModalLoginOTP = ({visible = false, style}) => {
  // init state
  const [visibleModalInputPhone, setVisibleModalInputPhone] = useState(true);
  const [visibleModalOTP, setVisibleModalOTP] = useState(false);
  const [cleanModalOTP, setCleanModalOTP] = useState(false);
  const [visibleModalCountry, setVisibleModalCountry] = useState(false);
  const [Country, setCountry] = useState('');
  const [phoneString, setPhoneString] = useState('');
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(0);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  //open ModalListCoutry
  const openModalCoutry = () => {
    setVisibleModalCountry(true);
  };
  // set value Country after select
  const onSelectCountry = e => {
    setCountry(e);
    setVisibleModalCountry(false);
  };
  // Handle clean modal InputOTP and close modal when click button Cancle
  const onPressCancelModalOTP=()=>{
    setCleanModalOTP(true)
    setVisibleModalOTP(false);
  }
  //Handle check number phone return from InputPhoneNumber
  const onSubmitPhoneNumber =value => {
    if (value.length > 0) {
      var validatePhone = phone(value);
      if (validatePhone.isValid === true) {
          setPhoneString(value);
          setVisibleModalOTP(true);
      } else {
        diaLog.showDialogMessage('Wrong phone number format', 'close');
      }
    }
  }
  // Set time limit resend otp
  useEffect(()=>{
    visibleModalOTP === true ? setTimer(timerValue) : setTimer(0);
  },[visibleModalOTP])
  useEffect(() => {
    // Workarround set timer for resend code
    let timeout = setInterval(() => {
      if (timer === 0) return;
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(timeout);
    };
  }, [timer]);
  // Handle resend OTP new
  const onHandleResendCode = async () => {
    await setTimer(timerValue);
    await onResend();
  };

  return (
    <View style={styles.container}>
      <InputPhoneNumber
        input={Country}
        visible={visibleModalInputPhone}
        openModalSelect={openModalCoutry}
        onSubmit ={value  =>onSubmitPhoneNumber(value)}
      />
      <InputOTP
        visible={visibleModalOTP}
        clear ={cleanModalOTP}
        onCancel ={onPressCancelModalOTP}
        onResend={onHandleResendCode}
        timer={timer}
      />
      <ModalListCountry
        visible={visibleModalCountry}
        selectItem={e => onSelectCountry(e)}
      />
    </View>
  );
};

export default ModalLoginOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: Sizes.radius,
    overflow: 'hidden',
  },
});
