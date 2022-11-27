import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';


export default function IconButton(props) {
    let iconPath = '';    

    switch(props.icon) {
        case 'settings': {
            iconPath = require('../../assets/images/icons/settings.png');
            break;
        }
        case 'plus': {
            iconPath = require('../../assets/images/icons/plus.png');
            break;
        }
        case 'persentage': {
            iconPath = require('../../assets/images/icons/persentage.png');
            break;
        }
        case 'copy': {
            iconPath = require('../../assets/images/icons/copy.png');
            break;
        }
    }    

    return (
        <TouchableOpacity
            style={styles.iconButton}
            onPress={() => props.onPress()}
        >
            <Image source={iconPath} resizeMode='contain' style={[styles.iconButtonSize, props.style]} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        width: 40,
        height: 40
    },
    iconButtonSize: {
        width: 40,
        height: 40
    }
});