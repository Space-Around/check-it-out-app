import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default function CustomTitle(props) {
    return (
        <Text style={styles.customTitle}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    customTitle: {
        color: 'black',
        fontSize: 30,
        fontWeight: '900',
        paddingBottom: 15     
    },
});