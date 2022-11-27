import Modal from "react-native-modal";
import React, { useState } from 'react';
import CustomButton from './Button'
import IconButton from './IconButton'
import blueVersion from '../styles/colors'
import { SafeAreaView, ScrollView, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';


export default function ResponseModal(props) {
    return (
        <Modal isVisible={props.state}>
			<View style={styles.favoriteModal}>
				<View style={styles.favoriteModalHeader}>
					<Text style={styles.favoriteModalHeaderText}>{'Favorite item'}</Text>
					<TouchableOpacity
						style={styles.buttonModal}
						onPress={() => props.changeState(!props.state)}
					>
						<Image source={require('../../assets/images/icons/close.png')} style={styles.iconButtonModal}/>
					</TouchableOpacity>
				</View>
				<SafeAreaView style={styles.safeAria}>
					<ScrollView style={styles.favoriteModalView}>																	
						<View style={styles.favoriteModalBlock}>
							<Text style={styles.favoriteModalTextLabel}>{'Language'}</Text>
							<CustomButton disabled={true} style={styles.favoriteModalInfoButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='English' width='100%'/>
						</View>
						<View style={styles.favoriteModalBlock}>
							<View style={styles.favoriteModalSubBlock}>
								<Text style={styles.favoriteModalTextLabel}>{'Request'}</Text>
								<IconButton icon='copy' onPress={() => {}} style={styles.copyIcon}/>
							</View>
							<View style={styles.requestTextBlock}>
								<Text style={styles.favoriteModalText}>{'Response'}</Text>
							</View>
						</View>
						<View style={styles.favoriteModalBlock}>
							<View style={styles.favoriteModalSubBlock}>
								<Text style={styles.favoriteModalTextLabel}>{'Response'}</Text>
								<IconButton icon='copy' onPress={() => {}} style={styles.copyIcon}/>
							</View>
							<View style={styles.responseTextBlock}>
								<Text style={styles.favoriteModalText}>{'Response'}</Text>
							</View>
						</View>
						<View style={styles.favoriteModalBlock}>
							<CustomButton backgroundColor={blueVersion.blue} textColor='white' borderColor={blueVersion.blue} text='Add to Favorite' width='100%'/>
						</View>						
					</ScrollView>
				</SafeAreaView>
			</View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    favoriteModal: {
        width: "100%",
        height: "100%",
		backgroundColor: 'white',
		borderRadius: 25,
		padding: 15,
		overflow: 'hidden',
    },
	favoriteModalHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
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
    },
	favoriteModalBlock: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		paddingTop: 10,
		paddingBottom: 20
	},
	favoriteModalSubBlock: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	favoriteModalInfoButton: {
		
	},
	favoriteModalTextLabel: {
		fontSize: 28,
		fontWeight: 'bold',
		paddingBottom: 0,
		color: 'black',
		paddingBottom: 10
	},
	favoriteModalText: {
		
	},
	copyIcon: {
		width: 30,
		height: 30
	},
	requestTextBlock: {
		borderRadius: 15,
		borderWidth: 4,
		borderColor: 'black',
		padding: 10,
		height: 200,
	},
	responseTextBlock: {
		borderRadius: 15,
		borderWidth: 4,
		borderColor: 'black',
		padding: 10,
		height: 200
	},
	favoriteModalView: {
		width: '100%',		
	},
	safeAria: {
		paddingBottom: 50,
	},
});