import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function RequestsBlock(props) {    
    return (
        <TouchableOpacity
            style={styles.requestsBlock}
        >
            <Text style={styles.requestsBlockBigText}>{props.bigText}</Text>
            <Text style={styles.requestsBlockSmallText}>{props.smallText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    requestsBlock: {
        width: '80%',
        height: 90,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'baseline',
        borderRadius: 20,
        backgroundColor: 'white'
    },
    requestsBlockBigText: {
        fontWeight: 'bold',
        fontSize: 60,
        color: 'black'
    },
    requestsBlockSmallText: {
        fontWeight: 'normal',
        fontSize: 35,
        color: 'black'
    }
});