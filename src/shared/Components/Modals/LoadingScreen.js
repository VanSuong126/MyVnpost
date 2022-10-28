import React from 'react'
import { Modal, StyleSheet } from 'react-native';

import { View, Image } from "~shared/Components/MyStyle"
import { parseSize } from '~themes'

const IMG_LOADING = require('~assets/icons/gif/loading.gif');

const LoadingScreen = ({
    visible = false,
    style,
}) => (
    <View flex-center>
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View flex-center style={styles.modal}>
                <Image source={IMG_LOADING} style={[styles.image, style]} />
            </View>
        </Modal>
    </View>
);

export default LoadingScreen;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52,0.5)'
    },
    image: {
        width: parseSize(55),
        height: parseSize(55)
    }
})