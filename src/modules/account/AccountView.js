import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Text, StyleSheet } from 'react-native';
import Title from '../../components/Title'
import CustomButton from '../../components/Button'
import TextInput from '../../components/TextInput'
import PlanModal from '../../components/PlanModal'
import blueVersion from '../../styles/colors'


export default function AccountView({ route, navigation }) {
	const [modalStandartVisible, setModalPlusVisible] = React.useState(false);
	const [modalStandartPlusVisible, setModalStandartPlusVisible] = React.useState(false);
	const [modalProVisible, setModalProVisible] = React.useState(false);

    return (
		<SafeAreaView style={styles.safeAria}>
			<ScrollView style={styles.accountView}>
				<View style={styles.accountViewScreenTitleBlock}>
					<Text style={styles.accountViewScreenTitle}>Account</Text>
				</View>
				<View style={styles.accountViewPlanBlock}>
					<Title text='Plans'/>
					<CustomButton onPress={() => setModalPlusVisible(!modalStandartVisible)} style={styles.accountPlanButton} backgroundColor={blueVersion.blue} textColor='white' text='Standart' width='100%'/>
					<CustomButton onPress={() => setModalStandartPlusVisible(!modalStandartPlusVisible)} style={styles.accountPlanButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='Standart Plus' width='100%'/>
					<CustomButton onPress={() => setModalProVisible(!modalProVisible)} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='Advanced' width='100%'/>
				</View>
				<View style={styles.accountViewUsernameBlock}>
					<Title text='User name'/>
					<TextInput placeholder='Username' value='Max'/>
				</View>
				<View style={styles.accountViewEmailBlock}>
					<Title text='Email'/>
					<TextInput placeholder='Email' value='viksnamax@mail.ru'/>
				</View>
				<View style={styles.accountViewEmailBlock}>
					<Title text='Password'/>
					<TextInput placeholder='Password' value=''/>
					<TextInput style={styles.accountPasswordTextInput} placeholder='Repeat password' value=''/>
				</View>
				<View style={styles.accountViewLogoutBlock}>
					<Title text='Log out'/>
					<CustomButton backgroundColor={blueVersion.transparent} borderColor='red' textColor='red' text='Log out' width='100%'/>
				</View>
				<View style={styles.accountViewSaveBlock}>
					<CustomButton style={styles.accountSaveButton} backgroundColor={blueVersion.blue} textColor='white' text='Save' width='100%'/>
				</View>
			</ScrollView>
			<PlanModal planName={'Standart'} requestsCount={'250'} price={'5$'} state={modalStandartVisible} changeState={() => setModalPlusVisible(false)} />
			<PlanModal planName={'Standart Plus'} requestsCount={'300'} price={'10$'} state={modalStandartPlusVisible} changeState={() => setModalStandartPlusVisible(false)} />
			<PlanModal planName={'Advanced'} requestsCount={'400'} price={'20$'} state={modalProVisible} changeState={() => setModalProVisible(false)} />
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
	safeAria: {
		flex: 1,
	},
	accountView: {
		flex: 1,
		width: '100%',
		height: '100%',
		paddingLeft: '8%',
		paddingRight: '8%',
		overflow: 'scroll'
	},
	accountViewScreenTitle: {
		color: 'black',
        fontSize: 40,
        fontWeight: 'normal',
	},
	accountViewScreenTitleBlock: {
		width: '100%',
		marginTop: 20,
	},
	accountViewPlanBlock: {
		width: '100%',
		marginTop: 20
	},
	accountPlanButton: {
		marginBottom: 20
	},
	accountViewUsernameBlock: {
		width: '100%',
		marginTop: 40,
	},
	accountViewEmailBlock: {
		width: '100%',
		marginTop: 40,
	},
	accountPasswordTextInput: {
		marginTop: 20
	},
	accountViewLogoutBlock: {
		width: '100%',
		marginTop: 40,
	},
	accountViewSaveBlock: {
		width: '100%',
		marginTop: 40,
	},
	accountSaveButton: {
		marginTop: 40,
		marginBottom: 20,
	}
});