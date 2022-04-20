import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import IconProfile from "../assets/images/profile.png";
import Logo from "../assets/images/logo.png";
import IconMenu from "../assets/images/menu.png";
import Bell from "../assets/images/bell.png";
const IndexForm = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Image source={IconProfile} />
                    <Image style ={styles.img_logo} source={Logo} />
                    <View style={styles.wrap_icon_menu}>
                        <Image source={IconMenu} />
                        <Image source={Bell} />
                    </View>
                </View>
                <View style={styles.body}>

                </View>
                <View style={styles.footer}>

                </View>
            </View>
        </SafeAreaView>
    )
}
export default IndexForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: "grey",
        paddingBottom: 10,
    },
    body: {
        flex: 0.7,
        backgroundColor: "yellow",
    },
    footer: {
        flex: 0.2,
        backgroundColor: "coral",
    },
    img_logo:{
        height:20,
        width:20,
    }
})