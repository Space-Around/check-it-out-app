import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import blueVersion from '../styles/colors'


export default function WelcomeTitle(props) {
    return (
        <View style={styles.welcomeTitleBlock}>
            <Text style={styles.welcomeTitleFirst}>{'Hi, '}</Text>
            <Text style={styles.welcomeTitleSecond}>{props.text}</Text>
            <Text style={styles.welcomeTitleThird}>{' 👋'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeTitleFirst: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'normal',        
    },
    welcomeTitleSecond: {
        color: blueVersion.blue,
        fontSize: 40,
        fontWeight: 'bold', 
    },
    welcomeTitleThird: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold', 
    },
    welcomeTitleBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    }
});