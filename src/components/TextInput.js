import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


export default function CustomTextInput(props) {
    const [text, onChangeText] = React.useState(props.value);

    return (
        <TextInput
            style={[styles.customTextInput, props.style]}
            placeholder={props.placeholder}
            value={text}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    customTextInput: {
        width: '100%',
        height: 60,
        borderWidth: 4,
        borderColor: 'gray',
        borderRadius: 35,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 20
    },
});