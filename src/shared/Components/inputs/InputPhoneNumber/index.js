import React, {useState, useLayoutEffect} from 'react';
import { View,StyleSheet, TextInput } from "react-native";

import { Sizes,Colors } from "../../../../themes";

import {dataCountry} from '../../../../data/dataCountry';
import InputSelection from "../InputSelection";

import IconVector, {IconType} from '../../icons/IconVector';
import ButtonWithText from '../../buttons/ButtonWithText';


import diaLog from '../../../../helper/diaLog';

const InputPhoneNumber =props =>{
   const {style,input ,openModalSelect, onSubmit} =props;
   const [nameCountry, setNameCountry] = useState();
   const [phoneCode, setPhoneCode] = useState();
   const [phoneNumber, setPhoneNumber] = useState('');
   
   useLayoutEffect (()=>{
    setNameCountry(input.nameCountry);
    setPhoneCode(input.phoneCode);
   },[input])
   const onPressInputSelection =()=>{
     setVisibleModal(true);
   }
   const enterCountryCode = value =>{
    setPhoneCode(value);
    if(value.length>0)
    {
        var country = dataCountry.filter(v=>v.phoneCode === value);
        country.length >0 ? setNameCountry(country[0].nameCountry) : setNameCountry(null);   
    }
   }
   const enterPhoneNumber = number =>{
        setPhoneNumber(number);
   }
   const clickContinue =()=>{
       if (phoneCode.length>0)
       {
            if(phoneNumber.length>0)
            {
                onSubmit('+' + phoneCode + phoneNumber);
            }
            else {
                  diaLog.showDialogMessage('invalid number phone', 'close');
            }
       }
       else 
       {
          diaLog.showDialogMessage('invalid phone code','close');
       }
   }
 return(
        <View style ={[styles.container,style]}>
            <InputSelection
            value ={nameCountry}
            placeholder= {'Chọn quốc gia'}
            openSelectList = {openModalSelect}
            />
         <View style ={styles.wrapPhone}>
            <View style ={styles.wrapCodeCountry}>
                <IconVector
                name ={'add'}
                type ={IconType.ionicon}
                size ={Sizes.medium}
                color ={Colors.dark}
                />
                <TextInput value={phoneCode} onChangeText={e =>enterCountryCode(e)} keyboardType='numeric' maxLength={3} style ={styles.textCodeCountry}/>
            </View>
            <View style ={styles.wrapPhoneNumber}>
              <View style={styles.lineLeft} />
              <TextInput value={phoneNumber} keyboardType='numeric' onChangeText={e =>enterPhoneNumber(e)} maxLength={10} style ={styles.textNumberPhone}/>
            </View>
         </View>
        <ButtonWithText title ={'Tiếp tục'} onPress ={clickContinue}/>
       
    </View>
 )
}
export default InputPhoneNumber

const styles = StyleSheet.create({
    container:{
        flex:0.5,
        justifyContent:'center',
        alignItems:"center",
    },
    wrapPhone:{
        flexDirection:'row',
        height:Sizes.input,
        borderWidth:Sizes.border,
        borderColor:Colors.dark,
        borderRadius:Sizes.radius,
        justifyContent:'space-between',
        marginHorizontal:Sizes.margin,
        marginVertical:Sizes.margin,
    },
    wrapCodeCountry:{
        flexDirection:'row',
        height:Sizes.input,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:Sizes.padding,
    },
    textCodeCountry:{

    },
    wrapPhoneNumber:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:Sizes.input,
    },
    textNumberPhone:{
        flex:1,
        paddingHorizontal:Sizes.padding,
    },
    lineLeft:{
        height:Sizes.input -20,
        width:2,
        backgroundColor:Colors.border,
    }
})