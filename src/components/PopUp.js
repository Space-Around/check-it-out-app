import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';


export default function PopUp(props) {
    const [popUpVisible, setPopUpVisible] = useState(false);
    let closeIconPath = '',
        textColor = '',
        bgColor = '';

    switch(props.status) {
        case "success": {
            closeIconPath = require("../../assets/images/icons/green_close.png"),
            textColor = 'green',
            bgColor = 'lightgreen';

            break;
        }
        case "error": {
            closeIconPath = require("../../assets/images/icons/red_close.png"),
            textColor = 'red',
            bgColor = 'lightcoral';

            break;
        }
        case "primary": {
            closeIconPath = require("../../assets/images/icons/blue_close.png"),
            textColor = 'blue',
            bgColor = '#BDC3FF';

            break;
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.isPopUpVisible}
            onRequestClose={() => {            
                setPopUpVisible(!popUpVisible);
            }}
            style={styles.customPopUp}
        >
            <View style={styles.mainViewPopUp}>
                <View style={[{backgroundColor: bgColor}, styles.viewPopUp]}>
                    <Text style={[{color: textColor}, styles.textPopUp]}>{props.text}</Text>
                    <TouchableOpacity
                        style={styles.buttonModal}
                        onPress={() => setPopUpVisible(!popUpVisible)}
                    >
                        <Image source={closeIconPath} style={styles.iconButtonModal}/>
                    </TouchableOpacity>                
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    customPopUp: {
        width: "90%",
        height: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainViewPopUp: {
        width: '100%',
        height: 90,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        elevation: 20,        
    },
    viewPopUp: {
        width: "90%",
        height: "80%",
        borderRadius: 20,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 4,
        borderColor: 'blue'
    },
    iconButtonModal: {
        width: 40,
        height: 40,     
    },
    buttonModal: {
        width: 40,
        height: 40,
    
    },
    textPopUp: {
        fontSize: 20,
        fontWeight: '700'
    }
});