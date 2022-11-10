import Modal from "react-native-modal";
import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';


export default function CheckItOutModal(props) {
    return (
      <View>
        <Modal isVisible={props.state}>
        	<View style={styles.checkItOutModal}>
				<View style={styles.checkItOutModalHeader}>
					<Text style={styles.checkItOutModalHeaderText}>{'Choose'}</Text>
					<TouchableOpacity
						style={styles.buttonModal}
						onPress={() => props.changeState(!props.state)}
					>
						<Image source={require('../../assets/images/icons/close.png')} style={styles.iconButtonModal}/>
					</TouchableOpacity>
				</View>
                {props.children}
          </View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
    checkItOutModal: {
        width: "100%",
        height: "20%",
		backgroundColor: 'white',
		borderRadius: 25,
		padding: 15
    },
	checkItOutModalHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	checkItOutModalHeaderText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'black',
	},
    iconButtonModal: {
        width: 40,
        height: 40,     
    },
    buttonModal: {
        width: 40,
        height: 40,
    }
});