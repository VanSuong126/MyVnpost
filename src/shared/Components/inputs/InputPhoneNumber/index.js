import React, {useState} from 'react';
import { View,Text, StyleSheet, TextInput } from "react-native";

import { Sizes,Colors, Width } from "../../../../themes";

import {dataCountry} from '../../../../data/dataCountry';
import InputSelection from "../InputSelection";
import ModalListCountry from "../../modals/ModalListCountry";
import IconVector, {IconType} from '../../icons/IconVector';
import ButtonWithText from '../../buttons/ButtonWithText';
import { size } from 'lodash';

const InputPhoneNumber =props =>{
   const [selectText, setSelectText] = useState();
   const [selectPhoneCode, setSelectPhoneCode] = useState();
   const [visibleModal, setVisibleModal] = useState(false);
   
   const onPressInputSelection =()=>{
     setVisibleModal(true);
   }
   const onSelectCountry = value => {
        setSelectText(value.nameCountry);
        setSelectPhoneCode(value.numberPhone);
        setVisibleModal(false);
   }
   const enterCountryCode = value =>{
        setSelectPhoneCode(value);
    if(value.length>0)
    {
        var country = dataCountry.filter(v=>v.numberPhone === value);
        if( country.length >0 )
        {
            setSelectText(country[0].nameCountry);
        }
        else {
            setSelectText('');
        }
        
    }
   }
   const clickContinue =()=>{
    
   }
 return(
        <View style ={styles.container}>
            <InputSelection
            value ={selectText}
            placeholder= {'Chọn quốc gia'}
            openSelectList = {onPressInputSelection}
            />
         <View style ={styles.wrapPhone}>
            <View style ={styles.wrapCodeCountry}>
                <IconVector
                name ={'add'}
                type ={IconType.ionicon}
                size ={Sizes.medium}
                color ={Colors.dark}
                />
                <TextInput value={selectPhoneCode} onChangeText={text =>enterCountryCode(text)} keyboardType='numeric' maxLength={3} style ={styles.textCodeCountry}/>
            </View>
            <View style ={styles.wrapPhoneNumber}>
              <View style={styles.lineLeft} />
              <TextInput keyboardType='numeric' maxLength={10} style ={styles.textNumberPhone}/>
            </View>
         </View>
        <ButtonWithText title ={'Tiếp tục'} onPress ={clickContinue}/>
        < ModalListCountry
            visible = {visibleModal}
            selectItem ={value => onSelectCountry(value)}
            />
    </View>
 )
}
export default InputPhoneNumber

const styles = StyleSheet.create({
    container:{
        flex:1,
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