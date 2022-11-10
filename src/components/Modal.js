import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Image, StyleSheet } from 'react-native';


export default function CustomModal(props) {
    // const [modalVisible, setModalVisible] = useState(true);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.state}
            onRequestClose={() => {            
                props.changeState(!props.state);
            }}
            style={styles.customModal}
        >
            <View style={styles.mainViewModal}>
                <View style={styles.backgroundViewModal}></View>
                <View style={styles.viewModal}>
                    <TouchableOpacity
                        style={styles.buttonModal}
                        onPress={() => props.changeState(!props.state)}
                    >
                        <Image source={require('../../assets/images/icons/close.png')} style={styles.iconButtonModal}/>
                    </TouchableOpacity>
                    {props.children}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    customModal: {
        width: "100%",
        height: "100%",        
    },
    mainViewModal: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewModal: {
        width: "95%",
        height: "95%",
        backgroundColor: 'white',
        position: 'absolute',    
        zIndex: 2,
        borderRadius: 25,
        padding: 35
    },
    backgroundViewModal: {
        width: "100%",
        height: "100%",
        backgroundColor: 'black',
        position: 'absolute',
        zIndex: 1,
        opacity: 0.1
    },
    iconButtonModal: {
        width: 40,
        height: 40,     
    },
    buttonModal: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 35,
        right: 35
    }
});