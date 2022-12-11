import React, {useState, useEffect} from 'react';
import {phone} from 'phone';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

import {Sizes, Colors} from '../../../../themes';
import InputPhoneNumber from '../../inputs/InputPhoneNumber';
import ModalListCountry from '../../modals/ModalListCountry';
import InputOTP from '../../inputs/InputOTP';
import diaLog from '../../../../helper/diaLog';
const timerValue = 60;

const ModalLoginOTP = props => {
  const {visible = false, style} = props;
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
  const [user, setUser] = useState();
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Set time limit resend otp
  useEffect(() => {
    if (visibleModalOTP === true) {
      return setTimer(timerValue);
    }
    setTimer(0);
  }, [visibleModalOTP]);

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

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  if (initializing) return null;

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
  const onPressCancelModalOTP = () => {
    setCleanModalOTP(true);
    setVisibleModalOTP(false);
  };
  //Handle check number phone return from InputPhoneNumber
  const onSubmitPhoneNumber = value => {
    if (value.length > 0) {
      var validatePhone = phone(value);
      if (validatePhone.isValid === true) {
        logout();
        setPhoneString(value);
        signIn(value);
        setVisibleModalOTP(true);
      } else {
        diaLog.showDialogMessage('Wrong phone number format', 'close');
      }
    }
  };

  // Handle resend OTP new
  const onHandleResendCode = async () => {
    await setTimer(timerValue);
    await onResend();
  };
  // Handle the button setConfirm OTP firebase
  async function signIn(value) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        '+84 98 435 76 36',
      );
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  }
  // Handle the verify phone button press
  async function verifyPhoneNumber(phoneNumber) {
    const confirmation = await auth().verifyPhoneNumber('+84 98 435 76 36');
    setConfirm(confirmation);
    console.log(confirm);
  }
  async function confirmCode(otp) {
    try {
      await auth.PhoneAuthProvider.credential(confirm.verificationId, otp)
      setConfirm(null);
      console.log('login successfull');
    } catch (error) {
      console.log(error);
    }
  }
  async function logout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  const AuthencationOTP = otp => {
    console.log('input otp: ' + otp);
    console.log('comfirm: ' + confirm);
    confirmCode(otp);
  };

  return (
    <View style={styles.container}>
      <InputPhoneNumber
        input={Country}
        visible={visibleModalInputPhone}
        openModalSelect={openModalCoutry}
        onSubmit={value => onSubmitPhoneNumber(value)}
      />
      <InputOTP
        onSubmit={otp => AuthencationOTP(otp)}
        visible={visibleModalOTP}
        clear={cleanModalOTP}
        onCancel={onPressCancelModalOTP}
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
