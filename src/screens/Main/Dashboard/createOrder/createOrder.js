import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
// import image
import IconBack from 'assets/images/back.png';
import ArrowUp from 'assets/images/arrowup.png';
import ArrowDown from 'assets/images/arrowdown.png';
import Bell from 'assets/images/bell.png';
import Box from 'assets/images/box.png';
import Package from 'assets/images/package.png';

import RadioButton from 'modals/Radiobutton';
import CheckBox from 'modals/Checkbox';

//Component infomation Sender
const SenderInformation = () => {
  const [isVisibleSender, setIsVisibleSender] = useState(true);
  const [SenderName, setSenderName] = useState('Văn Sướng');
  const [SenderPhone, setSenderPhone] = useState('0984357636');
  const [SenderAddress, setSenderAddress] = useState(
    '125 Hai Bà Trưng, phường Bến Nghé, Quận 1',
  );
  const SetValue = () => {
    setSenderPhone();
    setSenderAddress();
  };
  const SenderCollapse = isVisibleSender => {
    setIsVisibleSender(!isVisibleSender);
  };
  return (
    <View style={styles.warp_info}>
      <View style={[styles.wrap_sender_info, styles.boxShadow]}>
        <View style={styles.wrap_title}>
          <Text style={styles.title}>Người gửi</Text>
          <Pressable
            style={styles.img_arrow}
            onPress={() => SenderCollapse(isVisibleSender)}>
            {isVisibleSender && isVisibleSender == true ? (
              <Image source={ArrowDown} />
            ) : (
              <Image source={ArrowUp} />
            )}
          </Pressable>
        </View>
        {isVisibleSender && isVisibleSender == true ? (
          <View style={styles.wrap_info_up}>
            <Text style={styles.txt_info}>
              {' '}
              {SenderName} - {SenderPhone}
            </Text>
            <Text style={styles.txt_info}>{SenderAddress}</Text>
          </View>
        ) : (
          <View style={styles.wrap_info_up}>
            <TextInput
              style={styles.txp_search}
              placeholder="Tìm kiếm bằng họ tên, số điện thoại..."
            />
            <View style={styles.wrap_input}>
              <View style={styles.wrap_icon}>
                <Text style={styles.star}>*</Text>
                <Image style={styles.icon_txp} source={Bell} />
              </View>
              <TextInput
                style={styles.txp_info_enter}
                placeholder="Nhập tên người gửi"
              />
            </View>
            <View style={styles.wrap_input}>
              <View style={styles.wrap_icon}>
                <Text style={styles.star}>*</Text>
                <Image style={styles.icon_txp} source={Bell} />
              </View>
              <TextInput
                style={styles.txp_info_enter}
                placeholder="Nhập số điện thoại người gửi"
              />
            </View>
            <View style={styles.wrap_input}>
              <View style={styles.wrap_icon}>
                <Text style={styles.star}>*</Text>
                <Image style={styles.icon_txp} source={Bell} />
              </View>
              <TextInput
                style={styles.txp_info_enter}
                placeholder="Nhập địa chỉ người gửi"
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
const DataRadioButon = [
  {value: 1, title: 'Không xác định'},
  {value: 2, title: 'Nhà riêng'},
  {value: 3, title: 'Công ty'},
];
//Component infomation Reveiver
const ReceiverInformation = () => {
  const [option, setOption] = useState(null);
  const [isVisibleReveiver, setIsVisibleReveiver] = useState(true);
  const [ReveiverName, setReveiverName] = useState('Nguyễn Văn A');
  const [ReveiverPhone, setReveiverPhone] = useState('0984357636');
  const [ReveiverAddress, setReveiverAddress] = useState(
    '293 Tôn Đản, P.15, Quận 4',
  );
  const SetValue = () => {
    setReveiverPhone();
    setReveiverAddress();
  };
  const ReveiverCollapse = isVisibleReveiver => {
    setIsVisibleReveiver(!isVisibleReveiver);
  };
  return (
    <View style={styles.warp_info}>
      <View style={[styles.wrap_Reveiver_info, styles.boxShadow]}>
        <View style={styles.wrap_title}>
          <Text style={styles.title}>Người nhận</Text>
          <Pressable
            style={styles.img_arrow}
            onPress={() => ReveiverCollapse(isVisibleReveiver)}>
            {isVisibleReveiver && isVisibleReveiver == true ? (
              <Image source={ArrowDown} />
            ) : (
              <Image source={ArrowUp} />
            )}
          </Pressable>
        </View>
        {isVisibleReveiver && isVisibleReveiver == true ? (
          <View style={styles.wrap_info_up}>
            <Text style={styles.txt_info}>
              {' '}
              {ReveiverName} - {ReveiverPhone}
            </Text>
            <Text style={styles.txt_info}>{ReveiverAddress}</Text>
          </View>
        ) : (
          <View style={styles.wrap_info_up}>
            <TextInput
              style={styles.txp_search}
              placeholder="Tìm kiếm bằng họ tên, số điện thoại..."
            />
            <View style={styles.wrap_input}>
              <View style={styles.wrap_icon}>
                <Text style={styles.star}>*</Text>
                <Image style={styles.icon_txp} source={Bell} />
              </View>
              <TextInput
                style={styles.txp_info_enter}
                placeholder="Nhập tên người nhận"
              />
            </View>
            <View style={styles.wrap_input}>
              <View style={styles.wrap_icon}>
                <Text style={styles.star}>*</Text>
                <Image style={styles.icon_txp} source={Bell} />
              </View>
              <TextInput
                style={styles.txp_info_enter}
                placeholder="Nhập số điện thoại người nhận"
              />
            </View>
            <View style={styles.wrap_input}>
              <View style={styles.wrap_icon}>
                <Text style={styles.star}>*</Text>
                <Image style={styles.icon_txp} source={Bell} />
              </View>
              <TextInput
                style={styles.txp_info_enter}
                placeholder="Nhập địa chỉ người nhận"
              />
            </View>
          </View>
        )}
        <View style={styles.wap_radiobuton}>
          <Text>Loại hàng hóa:</Text>
          <RadioButton
            data={DataRadioButon}
            onSelect={value => setOption(value)}
          />
        </View>
      </View>
    </View>
  );
};
const Merchandise = () => {
  const [optionRadioButton, setOption] = useState(null);
  const [isVisibleSize, setIsVisibleSize] = useState(false);
  const SizeCollapse = isVisibleSize => {
    setIsVisibleSize(!isVisibleSize);
  };
  return (
    <View style={styles.warp_info}>
      <View style={[styles.wrap_Reveiver_info, styles.boxShadow]}>
        <View style={styles.wrap_title}>
          <Text style={styles.title}>Hàng hóa</Text>
          <View style={styles.wrap_rule}>
            <Text style={styles.txt_rule_package}>Quy định hàng hóa</Text>
            <Image source={Box} />
          </View>
        </View>
        <View style={styles.wrap_info_up}>
          <View style={styles.wrap_input}>
            <View style={styles.wrap_icon}>
              <Image style={styles.icon_txp} source={Bell} />
            </View>
            <TextInput
              style={styles.txp_info_enter}
              placeholder="Nội dung hàng hóa"
            />
          </View>
          <View style={styles.wrap_ordercode_weight}>
            <View style={styles.wrap_input_ordercode}>
              <View style={styles.wrap_icon}>
                <Image style={styles.icon_txp} source={Bell} />
              </View>
              <TextInput
                style={styles.txp_info_enter}
                placeholder="Mã đơn hàng"
              />
            </View>
            <View style={styles.wrap_input_weight}>
              <View style={styles.wrap_icon}>
                <Text style={styles.star}>*</Text>
                <Image style={styles.icon_txp} source={Bell} />
              </View>
              <TextInput
                keyboardType={'numeric'}
                style={styles.txp_info_enter}
                placeholder="Trọng lượng"
              />
              <Text style={styles.txt_unit}>gr</Text>
            </View>
          </View>
          <View style={styles.wrap_title_size}>
            <Image source={Package} />
            <Pressable onPress={() => SizeCollapse(isVisibleSize)}>
              <Text style={styles.txt_size}> Kích thước (D-R-C) </Text>
            </Pressable>
          </View>
          {isVisibleSize && isVisibleSize == true ? (
            <View style={styles.wrap_input_size}>
              <View style={styles.wrap_input_length}>
                <TextInput
                  keyboardType={'numeric'}
                  style={styles.txp_info_enter}
                  placeholder="Dài"
                />
                <Text style={styles.txt_unit}>cm</Text>
              </View>
              <View style={styles.wrap_input_width}>
                <TextInput
                  keyboardType={'numeric'}
                  style={styles.txp_info_enter}
                  placeholder="Rộng"
                />
                <Text style={styles.txt_unit}>cm</Text>
              </View>
              <View style={styles.wrap_input_height}>
                <TextInput
                  keyboardType={'numeric'}
                  style={styles.txp_info_enter}
                  placeholder="Cao"
                />
                <Text style={styles.txt_unit}>cm</Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

//Component infomation ExtraService
const ExtraService = () => {
  const [valueCheckCOD, setCheckBoxCOD] = useState(0);
  const [valueCheckInsurance, setCheckBoxInsurance] = useState(0);
  const [valueCheckReport, setCheckBoxReport] = useState(0);
  const [valueCheckBill, setCheckBoxBill] = useState(0);
  return (
    <View style={styles.warp_info}>
      <View style={[styles.wrap_sender_info, styles.boxShadow]}>
        <View style={styles.wrap_title}>
          <Text style={styles.title}>Dịch vụ cộng thêm</Text>
        </View>
        <View style={styles.wrap_list_extra_service}>
          <View style={styles.wrap_group_checkbox}>
            <View style={styles.wrap_checkbox}>
              <View style={styles.wrap_check_extra}>
                <CheckBox
                  title={'Giao hàng thu tiền (COD)'}
                  onSelect={value => setCheckBoxCOD(value)}
                />
                {valueCheckCOD && valueCheckCOD == 1 ? (
                  <View style={styles.wrap_input_extra}>
                    <TextInput
                      keyboardType={'numeric'}
                      style={styles.txp_info_enter}
                      placeholder="Nhập số tiền"
                    />
                    <Text style={styles.txt_unit}>đ</Text>
                  </View>
                ) : null}
              </View>
            </View>
            <View style={styles.wrap_checkbox}>
              <View style={styles.wrap_check_extra}>
                <CheckBox
                  title={'Khai giá'}
                  onSelect={value => setCheckBoxInsurance(value)}
                />
                {valueCheckInsurance && valueCheckInsurance == 1 ? (
                  <View style={styles.wrap_input_extra}>
                    <TextInput
                      keyboardType={'numeric'}
                      style={styles.txp_info_enter}
                      placeholder="Nhập giá trị"
                    />
                    <Text style={styles.txt_unit}>đ</Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
          <View style={styles.wrap_group_checkbox}>
            <View style={styles.wrap_checkbox}>
              <CheckBox
                title={'Báo phát (AR)'}
                onSelect={value => setCheckBoxReport(value)}
              />
            </View>
            <View style={styles.wrap_checkbox}>
              <CheckBox
                title={'Dịch vụ hóa đơn'}
                onSelect={value => setCheckBoxBill(value)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

//Component infomation EMSTree
const EMSTree = () => {
  const [valueEMSTree, setvalueEMSTree] = useState(0);

  return (
    <View style={styles.warp_info}>
      <View style={[styles.wrap_sender_info, styles.boxShadow]}>
        <View style={styles.wrap_title}>
          <Text style={styles.title}>TMĐT chuyển phát nhanh EMS</Text>
        </View>
        <View style={styles.wrap_list_extra_service}>
          <View style={styles.wrap_group_checkbox}>
            <View style={styles.wrap_checkbox}>
              <CheckBox
                title={'EMS cây cảnh'}
                onSelect={value => setvalueEMSTree(value)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const CreateOrderForm = ({navigation}) => {
  generateBoxShadowStyle(2, 4, '#171717', 0.2, 3, 4, '#171717');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.icon_back} 
              onPress={() => {
                navigation.goBack();
              }}>
          <Image source={IconBack} />
          </TouchableOpacity>
          <Text style={styles.heder_title}>Tạo đơn hàng</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.status_bar}>
            <View style={styles.warp_status1}>
              <Text style={styles.txt_status1}>1</Text>
              <View style={styles.line_status}></View>
              <Text style={styles.txt_status2}>2</Text>
            </View>
            <ScrollView>
              <SenderInformation />
              <ReceiverInformation />
              <Merchandise />
              <ExtraService />
              <EMSTree />
              <View style={styles.btn_continue}>
                <Text style={styles.txt_continue}>Tiếp tục</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CreateOrderForm;
//style shadow box
const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginBottom: 50,
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 0.1,
    backgroundColor: 'orange',
    paddingBottom: 10,
  },
  heder_title: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  icon_back: {
    position: 'absolute',
    left: 20,
    bottom: 10,
  },
  body: {
    backgroundColor: '#F5F6F7',
    flex: 0.9,
  },
  warp_status1: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txt_status1: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'red',
    borderRadius: 30,
    width: 25,
    height: 25,
  },
  line_status: {
    position: 'relative',
    top: 9,
    right: 2,
    backgroundColor: '#A2A1A1',
    height: 3,
    width: 140,
    zIndex: -1,
    elevation: -1,
  },
  txt_status2: {
    textAlign: 'center',
    textAlignVertical: 'center',
    position: 'relative',
    right: 3,
    color: '#A2A1A1',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#A2A1A1',
    fontSize: 12,
    backgroundColor: '#FFF',
    borderRadius: 30,
    width: 20,
    height: 20,
  },
  warp_info: {
    paddingHorizontal: 10,
  },
  wrap_sender_info: {
    marginTop: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#171717',
  },
  wrap_title: {
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#C6E2FF',
  },
  title: {
    fontSize: 14,
    fontWeight: '900',
    color: '#36648B',
  },
  img_arrow: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  wrap_info_up: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  txt_info: {
    paddingVertical: 2,
  },
  txp_search: {
    paddingLeft: 10,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 5,
  },
  wrap_input: {
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'orange',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  wrap_icon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 38,
    width: 30,
    backgroundColor: '#F5F6F7',
    borderRadius: 5,
  },
  star: {
    fontWeight: 'bold',
    position: 'absolute',
    top: 0.1,
    left: 1.5,
    color: 'red',
  },
  icon_txp: {
    height: 20,
    width: 20,
  },
  txp_info_enter: {
    paddingLeft: 10,
    flex: 1,
  },
  wrap_Reveiver_info: {
    marginTop: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#171717',
  },
  wap_radiobuton: {
    paddingHorizontal: 10,
  },
  wrap_rule: {
    flex: 1,
    position: 'absolute',
    right: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt_rule_package: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  wrap_input_ordercode: {
    flex: 0.48,
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'orange',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  wrap_input_weight: {
    flex: 0.48,
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'orange',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  wrap_ordercode_weight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  txt_unit: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  wrap_title_size: {
    marginTop: 5,
    flexDirection: 'row',
  },
  txt_size: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 10,
    color: 'orange',
  },
  wrap_input_size: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  wrap_input_length: {
    flex: 0.3,
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'orange',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  wrap_input_width: {
    flex: 0.3,
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'orange',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  wrap_input_height: {
    flex: 0.3,
    alignItems: 'center',
    marginTop: 10,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'orange',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  wrap_list_extra_service: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  wrap_group_checkbox: {
    marginTop: 5,
    flexDirection: 'row',
  },
  wrap_checkbox: {
    flex: 0.5,
  },
  wrap_check_extra: {
    flexDirection: 'column',
  },
  wrap_input_extra: {
    flex: 0.5,
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
    height: 40,
    backgroundColor: '#FFF',
    borderColor: 'orange',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  btn_continue: {
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 10,
    height: 45,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt_continue: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
