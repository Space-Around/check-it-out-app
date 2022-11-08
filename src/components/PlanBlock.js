import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function PlanBlock(props) {    
    return (
        <View style={styles.planBlock}>
            <Text style={styles.planBlockText}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    planBlock: {
        width: '80%',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'blue'
    },
    planBlockText: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'white'
    }
});