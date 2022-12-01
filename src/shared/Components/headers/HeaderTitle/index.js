import React from "react";
import { View,Text, StyleSheet } from "react-native";

import { Sizes,Colors } from "../../../../themes";

const HeaderTitle =props =>{
const {  style,titleStyle, title }=props
 return(
    <View style ={[styles.container, style]}>
        <Text  style ={[styles.titleStyleDefault,titleStyle]}>{title}</Text>
    </View>
 )
}
export default HeaderTitle

const styles = StyleSheet.create({
    container:{
        height:50,
        backgroundColor:Colors.default,
        justifyContent:'center',
        alignItems:'center',
    },
    titleStyleDefault: {
        fontSize:Sizes.medium,
        color:Colors.white,
        fontWeight:'500',
    }
})