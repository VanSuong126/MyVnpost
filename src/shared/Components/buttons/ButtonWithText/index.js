import { size } from "lodash";
import React from "react";
import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import { Sizes, Colors} from "../../../../themes";

const ButtonWithText =props=>{
    const {styleButton, styleTitle,title, onPress}= props;
    return(
        <TouchableOpacity style ={[styles.wrapButton, styleButton]} onPress= {onPress}>
            <Text style ={[styles.titleButton, styleTitle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default ButtonWithText;
const styles = StyleSheet.create({
    wrapButton :{
       marginVertical:Sizes.padding,
       height:Sizes.button,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:Colors.default,
       borderRadius:Sizes.radius,
    },
    titleButton:{
        fontSize:Sizes.text,
        color:Colors.white,
        fontWeight:'bold',
        paddingVertical:size.padding,
        paddingHorizontal:Sizes.padding,
    }
})