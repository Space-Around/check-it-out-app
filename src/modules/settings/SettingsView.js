import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Text, StyleSheet, BackHandler } from 'react-native';
import blueVersion from '../../styles/colors'
import CustomButton from '../../components/Button'
import Title from '../../components/Title'


export default function SettingsView({ route, navigation }) {

    return (
      <SafeAreaView style={styles.safeAria}>
			<ScrollView style={styles.settingsView}>
				<View style={styles.settingsViewScreenTitleBlock}>
					<Text style={styles.settingsViewScreenTitle}>Settings</Text>
				</View>
				<View style={styles.settingsListBlock}>
          			<Title text='Language'/>
					<CustomButton style={styles.settingsListButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='English' width='100%'/>
				</View>
				<View style={styles.settingsListBlock}>
          			<Title text='Contact us'/>
					<CustomButton style={styles.settingsListButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='support@checkitout.com' width='100%'/>
				</View>
				<View style={styles.settingsListBlock}>
          			<Title text='About'/>
					<CustomButton style={styles.settingsListButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='Privacy policy' width='100%'/>
					<CustomButton style={styles.settingsListButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='Term of service' width='100%'/>
				</View>
			</ScrollView>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
	safeAria: {
		flex: 1,		
	},
	settingsView: {
		flex: 1,	
		width: '100%',
		heught: '100%',
		paddingLeft: '8%',
		paddingRight: '8%',
		overflow: 'scroll'
	},
	settingsViewScreenTitle: {
		color: 'black',
        fontSize: 40,
        fontWeight: 'normal',
	},
	settingsViewScreenTitleBlock: {
		width: '100%',
		marginTop: 20,
	},
	settingsListButton: {
		marginBottom: 20,
	},
	settingsListBlock: {
		marginTop: 40
	}
});