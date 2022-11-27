import React, {useState, useLayoutEffect} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import IconVector from '../../icons/IconVector';
import {Sizes, Colors, Height, Width} from '../../../../themes';

const InputWithIcon = props => {
  const [secureTextEntry, setSecureTextEntry] =useState(false);
  const [iconRight, setIconRight] =useState('eye');
  const {
    value,
    type, // type default = text, type = password input default Security
    style,
    maxLength,
    returnKeyType,
    keyboardType,
    placeholder,
    onChangeText,
    onEndEditing,
    nameLeftIcon,
    typeLeftIcon,
    sizeLeftIcon,
    colorLeftIcon,
    nameRightIcon,
    typeRightIcon,
    sizeRightIcon,
    colorRightIcon
  } = props;

  useLayoutEffect(()=>{
    if(type ==='password')
    {
        setSecureTextEntry(true);
    }
  },[])
  const onClickIconRight= () => {
    if(type === 'password')
    {
        if(iconRight==='eye')
        {
            setSecureTextEntry(true);
            setIconRight('eye-off');
        }
        else{
            setSecureTextEntry(false);
            setIconRight('eye');
        }
    }
    else
    {

    }
  }
  return (
    <View style ={styles.container}>
        <View style={styles.wrapInput}>
        {nameLeftIcon ? (
            <View style={styles.wrapLeftIcon}>
            <IconVector name={nameLeftIcon}
            type = {typeLeftIcon}
            size ={sizeLeftIcon}
            color ={colorLeftIcon} />
            </View>
        ) : null}
        <TextInput 
            style={styles.inputText}
            secureTextEntry= {secureTextEntry}
            placeholder={placeholder || ''}
            maxLength={maxLength || 100}
            keyboardType={keyboardType || 'default'}
            returnKeyType={returnKeyType || 'next'}
        />
        {type && type === 'password' ? <TouchableOpacity style={styles.wrapRightIcon} onPress={onClickIconRight}>
        <IconVector name={iconRight}
            type = {typeRightIcon}
            size ={sizeRightIcon}
            color ={colorRightIcon}
            />
        </TouchableOpacity> : null}
        </View>
    </View>
  );
};
export default InputWithIcon;

const styles = StyleSheet.create({
    container:{
        marginTop:Sizes.padding,
        opacity:0.7,
       
    },
    wrapInput:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:Sizes.inputHeight,
        borderColor:Colors.dark,
        borderWidth: Sizes.border*2,
        backgroundColor:"white",
        borderRadius:Sizes.radius,
    },
    wrapLeftIcon: {
        backgroundColor:Colors.white,
        paddingLeft:Sizes.padding,
        paddingRight:Sizes.padding,
    },
    inputText:{
        flex:1,
        textAlign:"left",
        fontWeight:'600',
        color:Colors.dark,
        fontSize:Sizes.text,
    },
    wrapRightIcon: {
        backgroundColor:Colors.white,
        paddingLeft:Sizes.padding,
        paddingRight:Sizes.padding,
    },
});
