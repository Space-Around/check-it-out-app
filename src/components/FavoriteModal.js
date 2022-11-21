import Modal from "react-native-modal";
import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';


export default function FavoriteModal(props) {
    return (
      <View>
        <Modal isVisible={props.state}>
        	<View style={styles.favoriteModal}>
				<View style={styles.favoriteModalHeader}>
					<Text style={styles.favoriteModalHeaderText}>{'Choose'}</Text>
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
    favoriteModal: {
        width: "100%",
        height: "20%",
		backgroundColor: 'white',
		borderRadius: 25,
		padding: 15
    },
	favoriteModalHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	favoriteModalHeaderText: {
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