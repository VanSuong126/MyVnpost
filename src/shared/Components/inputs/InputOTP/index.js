import React, {useState} from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {isEmpty} from '~helper/utils';
import {useTranslation} from 'react-i18next';
import {Sizes, Colors, Width, Height} from '../../../../themes';
import ButtonWithText from '../../buttons/ButtonWithText';
import {size} from 'lodash';

const InputOTP = props => {
  const {
    visible,
    maxLength = 6,
    onCancel,
    onSubmit,
    error,
    timer = 0,
    onResend,
    clear,
  } = props;
  const {t} = useTranslation();

  //init state
  const [code, setCode] = useState('');
  const isResend = timer === 0;

  const onSetCode = code => {
    setCode(code);
  };
  const onSubmitCode = async number => {
    await onSubmit(number);
    // await setIsClearInput(true);
  };
  return (
    <View flex-center>
      <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={visible}>
        <View style={styles.container}>
          <Text style={styles.titleOTP}>Nhập mã OTP xác thực đăng nhập</Text>
          <View style={styles.wrapTimerResend}>
            <Text style={{textAlign: 'center'}}>
              {t('otpLimit')}: {timer}
              {'s'}
            </Text>
            {isResend ? (
              <TouchableOpacity style={styles.wrapResend} onPress={onResend}>
                <Text style={styles.textResend}>Nhận lại mã</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <OTPInputView
            style={styles.input}
            pinCount={maxLength}
            code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={onSetCode}
            clearInputs={clear}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.styleBase}
            codeInputHighlightStyle={styles.styleBaseHighLighted}
            onCodeFilled={onSubmitCode}
          />
          <View style={styles.wrapButton}>
            <ButtonWithText
              onPress={onCancel}
              styleButton={styles.btnCancel}
              title={'Huỷ bỏ'}
            />
            <ButtonWithText
              onPress={onSubmitCode}
              styleButton={styles.btnContinue}
              title={'Tiếp tục'}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default InputOTP;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    backgroundColor: 'rgba(52, 52, 52,0.5)',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.lightWhite,
    paddingHorizontal: Sizes.padding,
    justifyContent: 'flex-start',
  },
  wrapTimerResend: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleOTP: {
    textAlign: 'center',
    fontSize: Sizes.text,
    fontWeight: '500',
    marginVertical: Sizes.margin,
  },
  input: {
    width: '100%',
    height: Width * 0.15,
    marginVertical: Sizes.margin,
  },
  styleBase: {
    color: Colors.dark,
    width: Width * 0.12,
    height: Width * 0.12,
    marginHorizontal: Sizes.margin / 2,
    borderWidth: Sizes.border,
    borderColor: Colors.default,
    borderRadius: Sizes.radius,
    backgroundColor: Colors.lightWhite,
  },
  styleBaseHighLighted: {
    borderColor: Colors.dark,
    color: Colors.danger,
  },
  wrapResend: {
    marginVertical: Sizes.margin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textResend: {
    fontSize: Sizes.text,
    paddingHorizontal: Sizes.padding,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  wrapButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCancel: {
    height: Sizes.button,
    width: Sizes.item,
    backgroundColor: Colors.lightDark,
    marginHorizontal: Sizes.margin,
  },
  btnContinue: {
    height: Sizes.button,
    width: Sizes.item,
    backgroundColor: Colors.link,
    marginHorizontal: Sizes.margin,
  },
});
