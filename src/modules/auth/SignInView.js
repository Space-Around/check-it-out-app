import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from '../../components/Button'
import LogoButton from '../../components/LogoButton'
import blueVersion from '../../styles/colors'
import TextInput from '../../components/TextInput'
import TermOfServiceModal from '../../components/TermOfServiceModal'
import PrivacyPolicyModal from '../../components/PrivacyPolicyModal'


export default function SignInView({ route, navigation }) {
	const [isTermOfServiceModalVisible, setIsTermOfServiceModalVisible] = React.useState(false);
	const [isPrivacyPolicyModalVisible, setIsPrivacyPolicyModalVisible] = React.useState(false);
	
    return (
    	<View style={styles.authBlockBlock}>
        	<View style={[styles.authViewBlocks, styles.logoBlock]}>
				<Image source={require('../../../assets/images/logo.png')} resizeMode='contain' style={styles.logoImg} />
				<Text style={styles.logoText}>{'CHECK IT OUT'}</Text>
			</View>
			<View style={styles.authViewBlocks}>
				<Image source={require('../../../assets/images/auth_center_image.png')} resizeMode='contain' style={styles.centralImg} />
			</View>
			<View style={styles.authViewBlocks}>
				<Text style={styles.centralText}>{"Fill out the fields"}</Text>
			</View>
			<View style={[styles.authViewBlocks, styles.signButtonsBlock]}>
				<TextInput placeholder='Email' value=''/>
			</View>
			<View style={[styles.authViewBlocks, styles.signButtonsBlock, styles.signButtonSecondBlock]}>
				<TextInput placeholder='Password' value=''/>
			</View>
			<View style={styles.authViewBlocks}>
				<CustomButton
					backgroundColor={blueVersion.blue}
					textColor='white'
					text='Sign In'
					width='100%'
					onPress={() => {}}
				/>				
			</View>			
			<View style={styles.authViewBlocks}>
				<Text style={styles.bottomText}>					
					<TouchableOpacity onPress={() => setIsTermOfServiceModalVisible(!isTermOfServiceModalVisible)} style={styles.bottomButtons}>
						<Text style={styles.bottomButtonsText}>{'Term of Service '}</Text>
					</TouchableOpacity>
					<TouchableOpacity disabled={true} style={styles.bottomButtons}>
						<Text style={styles.bottomSimpleText}>
							{'and '}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setIsPrivacyPolicyModalVisible(!isPrivacyPolicyModalVisible)} style={styles.bottomButtons}>
						<Text style={styles.bottomButtonsText}>{'Privacy Policy'}</Text>
					</TouchableOpacity>
				</Text>
			</View>
			<TermOfServiceModal state={isTermOfServiceModalVisible} changeState={() => setIsTermOfServiceModalVisible(false)}/>
			<PrivacyPolicyModal state={isPrivacyPolicyModalVisible} changeState={() => setIsPrivacyPolicyModalVisible(false)}/>
      	</View>
    );
}

const styles = StyleSheet.create({
	authBlockBlock: {
		display: 'flex',
		height: '100%',
		width: '100%',
		flexDirection: 'column',
		// justifyContent: 'space-between',
		// alignItems: 'center',
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 40,
		paddingBottom: 20
	},
	authViewBlocks: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// flex: 1
	},
	logoBlock: {
		flexDirection: 'row'
	},
	logoImg: {
		width: 40,
		height: 40,
		marginRight: 10
	},
	logoText: {
		fontSize: 25,
		fontWeight: '900',
		color: blueVersion.blue
	},
	centralImg: {
		width: '80%',
		height: 200,
		marginTop: 45
	},
	centralText: {
		fontWeight: '300',
		fontSize: 35,
		color: 'black',
		marginTop: 30,
		marginBottom: 50
	},
	separateText: {
		color: 'black',
		marginBottom: 20
	},
	socailAuthButtonsBlock: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	bottomText: {
		color: 'black',
		fontSize: 15,
		marginTop: 30,		
	},
	bottomButtons: {
	},
	signButtonsBlock: {
		marginBottom: 0,
		marginTop: 20
	},
	signButtonSecondBlock: {
		marginBottom: 20
	},
	bottomButtonsText: {
		color: 'black',
		fontWeight: '700',
	},
	bottomSimpleText: {
		color: 'black'
	}
});