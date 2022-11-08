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
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 15     
    },
});