import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Text, StyleSheet, Linking } from 'react-native';
import blueVersion from '../../styles/colors'
import CustomButton from '../../components/Button'
import Title from '../../components/Title'
import LangModal from '../../components/LangModal'
import PopUp from '../../components/PopUp'
import TermOfServiceModal from '../../components/TermOfServiceModal'
import PrivacyPolicyModal from '../../components/PrivacyPolicyModal'
import Clipboard from '@react-native-clipboard/clipboard';


export default function SettingsView({ route, navigation }) {
	const [modalLangVisible, setModalLangVisible] = React.useState(false);	
	const [settingLangVisible, setSettingLangVisible] = React.useState("English");
	const [isCopyMailPopUpVisible, setIsCopyMailPopUpVisible] = React.useState(false);
	const [isTermOfServiceModalVisible, setIsTermOfServiceModalVisible] = React.useState(false);
	const [isPrivacyPolicyModalVisible, setIsPrivacyPolicyModalVisible] = React.useState(false);

	const copyToClipboard = () => {
		setIsCopyMailPopUpVisible(true);

		setTimeout(() => {
			setIsCopyMailPopUpVisible(false);
		}, 2000);
	};
	
    return (
      <SafeAreaView style={styles.safeAria}>
			<ScrollView style={styles.settingsView}>
				<View style={styles.settingsViewScreenTitleBlock}>
					<Text style={styles.settingsViewScreenTitle}>Settings</Text>
				</View>
				<View style={styles.settingsListBlock}>
          			<Title text='Language'/>
					<CustomButton 
						style={styles.settingsListButton}
						backgroundColor={blueVersion.transparent}
						borderColor='black'
						textColor='black'
						text={settingLangVisible}
						width='100%'
						onPress={() => setModalLangVisible(!modalLangVisible)}
					/>
				</View>
				<View style={styles.settingsListBlock}>
          			<Title text='Contact us'/>
					<CustomButton
						style={styles.settingsListButton}
						backgroundColor={blueVersion.transparent}
						borderColor='black'
						textColor='black'
						text='support@checkitout.com'
						width='100%'
						onPress={() => Linking.openURL('mailto:support@checkitout.com?subject=Support').catch((error) => console.warn(Clipboard.setString('support@checkitout.com'))).then(() => copyToClipboard()) }
					/>
				</View>
				<View style={styles.settingsListBlock}>
          			<Title text='About'/>
					<CustomButton
						style={styles.settingsListButton}
						backgroundColor={blueVersion.transparent}
						borderColor='black'
						textColor='black'
						text='Privacy policy'
						width='100%'
						onPress={() => setIsPrivacyPolicyModalVisible(!isPrivacyPolicyModalVisible)}
					/>
					<CustomButton
						style={styles.settingsListButton}
						backgroundColor={blueVersion.transparent}
						borderColor='black'
						textColor='black'
						text='Term of service'
						width='100%'
						onPress={() => setIsTermOfServiceModalVisible(!isTermOfServiceModalVisible)}
					/>
				</View>
				<LangModal state={modalLangVisible} changeState={() => setModalLangVisible(false)} setCurrentLang={setSettingLangVisible}/>
				<TermOfServiceModal state={isTermOfServiceModalVisible} changeState={() => setIsTermOfServiceModalVisible(false)}/>
				<PrivacyPolicyModal state={isPrivacyPolicyModalVisible} changeState={() => setIsPrivacyPolicyModalVisible(false)}/>
				<PopUp status='primary' text='Copy to clipboard' isPopUpVisible={isCopyMailPopUpVisible}/>
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