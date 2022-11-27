import React, {useState, useLayoutEffect} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';

import MenuLogin from '../MenuLogin';
import {Sizes, Colors, Height, Width} from '../../../themes';
import FooterImageBackround from '../../../assets/images/background_login_footer.png';

const Footer =props=>{
    const {styleFooter} =props
    return(
        <View style ={styles.container}>
                   <ImageBackground
                    style={styles.footerImageBackground}
                    resizeMode ={'cover'}
                    source={FooterImageBackround}
                     >
                <MenuLogin/>
            </ImageBackground>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    footerImageBackground: {
        flex: 1,
        justifyContent: "center"
    }
})