import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Text, StyleSheet } from 'react-native';
import Title from '../../components/Title'
import CustomButton from '../../components/Button'
import TextInput from '../../components/TextInput'
import blueVersion from '../../styles/colors'


export default function AccountView({ route, navigation }) {
    return (
		<SafeAreaView style={styles.safeAria}>
			<ScrollView style={styles.accountView}>
				<View style={styles.accountViewScreenTitleBlock}>
					<Text style={styles.accountViewScreenTitle}>Account</Text>
				</View>
				<View style={styles.accountViewPlanBlock}>
					<Title text='Plans'/>
					<CustomButton style={styles.accountPlanButton} backgroundColor={blueVersion.blue} textColor='white' text='Standart' width='100%'/>
					<CustomButton style={styles.accountPlanButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='Standart Plus' width='100%'/>
					<CustomButton backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='Pro' width='100%'/>
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
				<View style={styles.accountViewPlanBlock}>
					<Title text='Log out'/>
					<CustomButton backgroundColor={blueVersion.transparent} borderColor='red' textColor='red' text='Log out' width='100%'/>
				</View>
				<View style={styles.accountViewPlanBlock}>
					<CustomButton style={styles.accountSaveButton} backgroundColor={blueVersion.blue} textColor='white' text='Save' width='100%'/>
				</View>
			</ScrollView>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
	safeAria: {
		flex: 1,
		paddingTop: StatusBar.currentHeight
	},
	accountView: {
		flex: 1,
		width: '100%',
		heught: '100%',
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
		marginTop: 20,
	},
	accountViewEmailBlock: {
		width: '100%',
		marginTop: 20,
	},
	accountPasswordTextInput: {
		marginTop: 20
	},
	accountSaveButton: {
		marginTop: 20,
		marginBottom: 20,
	}
});