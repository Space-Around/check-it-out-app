import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


export default function CustomTextInput(props) {
    const [text, onChangeText] = React.useState("");

    return (
        <TextInput
            style={styles.customTextInput}
            placeholder={props.placeholder}
            value={text}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    customTextInput: {
        width: '80%',
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