import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function CustomButton(props) {

    return (
        <TouchableOpacity
            style={[{
                backgroundColor: props.backgroundColor,
                borderColor: props.borderColor,
                borderWidth: props.borderColor ? 4 : 0
            }, styles.customButton]}
        >
            <Text
                style={[{color: props.textColor}, styles.textCustomButton]}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    customButton: {
        width: '80%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35
    },
    textCustomButton: {
        fontWeight: 'bold',
        fontSize: 22
    }
});