import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';


export default function LogoButton(props) {
    let iconPath = '';
    
    switch(props.icon) {
        case 'apple': {
            iconPath = require('../../assets/images/icons/apple.png');
            break;
        }
        case 'google': {
            iconPath = require('../../assets/images/icons/google.png');
            break;
        }
        case 'facebook': {
            iconPath = require('../../assets/images/icons/facebook.png');
            break;
        }
        case 'translate': {
            iconPath = require('../../assets/images/icons/translate.png');
            break;
        }
    }    

    return (
        <TouchableOpacity
            style={styles.logoButton}
            onPress={() => props.onPress()}
        >
            <Image source={iconPath} resizeMode='contain' style={styles.iconLogoButton} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    logoButton: {
        width: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 4,
        backgroundColor: 'transparent'
    },
    iconLogoButton: {
        width: 30,
        height: 30
    }
});