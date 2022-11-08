import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


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
        fontSize: 35,
        fontWeight: 'normal',        
    },
    welcomeTitleSecond: {
        color: 'blue',
        fontSize: 35,
        fontWeight: 'bold', 
    },
    welcomeTitleThird: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold', 
    },
    welcomeTitleBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    }
});