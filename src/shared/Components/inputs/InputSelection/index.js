import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import IconVector, {IconType} from '../../icons/IconVector';
import {Sizes, Colors, Height, Width} from '../../../../themes';

const InputSelection = props => {
  const {
    value, 
    style,
    maxLength,
    returnKeyType,
    keyboardType,
    placeholder,
    openSelectList
  } = props;
  return (
    <View style ={styles.container}>
        <TouchableOpacity style={styles.wrapInput} onPress={openSelectList}>
            <TextInput 
                value={value}
                style={styles.inputText}
                placeholder={placeholder || ''}
                maxLength={maxLength || 100}
                keyboardType={keyboardType || 'default'}
                returnKeyType={returnKeyType || 'next'}
                editable={false}
            />
           <View style={styles.wrapRightIcon}>
            <IconVector name={'down'}
                type = {IconType.antdesign}
                size ={12}
                color ={Colors.dark}
                />
            </View> 
        </TouchableOpacity>
    </View>
  );
};
export default InputSelection;

const styles = StyleSheet.create({
    container:{
       justifyContent:'center',
       alignSelf:'center',
       width:Width/2,
    },
    wrapInput:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:Sizes.input,
        paddingHorizontal:Sizes.padding,
        borderColor:Colors.dark,
        borderWidth: Sizes.border*2,
        backgroundColor:"white",
        borderRadius:Sizes.radius,
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
