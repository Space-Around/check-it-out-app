import Modal from "react-native-modal";
import React, { useState } from 'react';
import CustomTextInput from './TextInput'
import CustomButton from './Button'
import blueVersion from '../styles/colors'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';


export default function PlanModal(props) {
    return (
      <View>
        <Modal isVisible={props.state}>
        	<View style={styles.planModal}>
				<View style={styles.planModalHeader}>
					<Text style={styles.planModalHeaderText}>{'Choose'}</Text>
					<TouchableOpacity
						style={styles.buttonModal}
						onPress={() => props.changeState(!props.state)}
					>
						<Image source={require('../../assets/images/icons/close.png')} style={styles.iconButtonModal}/>
					</TouchableOpacity>
				</View>
                <View style={styles.planModalBlock}>
					<Text style={styles.planName}>{props.planName}</Text>
					<View style={styles.planInfoBlock}>
						<View style={styles.planInfoContentBlock}>
							<Text style={styles.planInfoContentTitle}>{'Requests'}</Text>
							<Text style={styles.planInfoContentText}>{props.requestsCount}</Text>
						</View>
						<View style={styles.planInfoContentBlock}>
							<Text style={styles.planInfoContentTitle}>{'Price'}</Text>
							<Text style={styles.planInfoContentText}>{props.price}</Text>
						</View>						
					</View>
					<View style={styles.planTextInputBlock}>
						<CustomTextInput placeholder={'Gift code'}/>
					</View>
					<View style={styles.planButtonBlock}>
						<CustomButton
							backgroundColor={blueVersion.blue}
							textColor='white'
							text='Upgrade'
							width='100%'
							onPress={() => {}}
						/>
					</View>										
				</View>
          </View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
    planModal: {
        width: "100%",
        height: "70%",
		backgroundColor: 'white',
		borderRadius: 25,
		padding: 15,
    },
	planModalHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	planModalHeaderText: {
		fontSize: 25,
		fontWeight: '900',
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
	planModalBlock: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '90%',
	},
	planName: {
		fontSize: 50,
		fontWeight: 'bold',
		color: 'black',
	},
	planInfoBlock: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline'
	},
	planInfoContentBlock: {
		display: 'flex',
		flexDirection: 'column',
		// paddingTop: 10,
		// paddingBottom: 30
	},
	planInfoContentTitle: {
		fontSize: 28,
		fontWeight: 'bold',
		paddingBottom: 0,
		color: 'black',
	},
	planInfoContentText: {
		fontSize: 70,
		fontWeight: '900',
		color: blueVersion.blue,
	},
	planTextInputBlock: {
		width: '100%',
		// paddingBottom: 20
	},
	planButtonBlock: {
		width: '100%'
	},
});