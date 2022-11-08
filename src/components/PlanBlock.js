import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import blueVersion from '../styles/colors'


export default function PlanBlock(props) {    
    return (
        <TouchableOpacity style={styles.planBlock}>
            <Text style={styles.planBlockText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    planBlock: {
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: blueVersion.blue
    },
    planBlockText: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'white'
    }
});