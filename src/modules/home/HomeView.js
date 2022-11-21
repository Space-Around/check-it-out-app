import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WelcomeTitle from '../../components/WelcomeTitle'
import Title from '../../components/Title'
import PlanBlock from '../../components/PlanBlock'
import IconButton from '../../components/IconButton'
import RequestsBlock from '../../components/RequestsBlock'
import ProposalBlock from '../../components/ProposalBlock'
import LogoButton from '../../components/LogoButton'
import CustomButton from '../../components/Button'
import CheckItOutModal from '../../components/CheckItOutModal'
import LangModal from '../../components/LangModal'
import ProposalModal from '../../components/ProposalModal'
import blueVersion from '../../styles/colors'


export default function HomeView({ route, navigation }) {
	const [modalCameraVisible, setModalCameraVisible] = React.useState(false);
	const [modalLangVisible, setModalLangVisible] = React.useState(false);
	const [modalProposalVisible, setModalProposalVisible] = React.useState(false);
	const [modalAdvVisible, setModalAdvVisible] = React.useState(false);

	return (
		<View style={styles.homeView}>
			<View style={styles.homeViewWelcomeBlock}>
				<WelcomeTitle text='Max!'/>
				<IconButton icon='settings' onPress={() => navigation.navigate('Settings')}/>
			</View>
			<View style={styles.homeViewPlanBlock}>                
				<Title text='Plan'/>
				<PlanBlock text='Standart' onPress={() => navigation.navigate('Account')}/>
			</View>
			<View style={styles.homeViewRequestsBlock}>
				<View style={styles.homeViewRequestsBlockChild}>
					<Title text='Requests'/>
					<IconButton icon='plus' onPress={() => navigation.navigate('Account')}/>
				</View>
				<RequestsBlock bigText='210' smallText='/210' onPress={() => navigation.navigate('Account')}/>
			</View>
			<View style={styles.homeViewRequestsBlock}>
				<View style={styles.homeViewRequestsBlockChild}>
					<Title text='Proposal'/>
					<IconButton icon='persentage' onPress={() => setModalProposalVisible(!modalProposalVisible)}/>
				</View>				
				<ProposalBlock text='Subscription for one year' bigText='20' smallText='%' onPress={() => setModalProposalVisible(!modalProposalVisible)}/>
			</View>
			<View style={styles.homeViewButtonBlock}>
				<LogoButton icon='translate'
					onPress={() => setModalLangVisible(!modalLangVisible)}
				/>
				<CustomButton
					backgroundColor={blueVersion.blue}
					textColor='white'
					text='Check it out!'
					width='70%'
					onPress={() => setModalCameraVisible(!modalCameraVisible)}
				/>
			</View>
			<CheckItOutModal state={modalCameraVisible} changeState={() => setModalCameraVisible(false)}/>
			<LangModal state={modalLangVisible} changeState={() => setModalLangVisible(false)}/>
			<ProposalModal state={modalProposalVisible} changeState={() => setModalProposalVisible(false)}/>
		</View>		
	);
}

const styles = StyleSheet.create({
	homeView: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		alignItems: 'center',
    	justifyContent: 'flex-start',
		width: '100%',
		heught: '100%',
		display: 'flex',
		paddingLeft: '8%',
		paddingRight: '8%'
	},
	homeViewWelcomeBlock: {
		width: '100%',		
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
	},
	homeViewPlanBlock: {
		width: '100%',
		marginTop: 40,
	},
	homeViewRequestsBlock: {
		width: '100%',
		marginTop: 20,
	},
	homeViewRequestsBlockChild: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	homeViewProposalBlock: {
		width: '90%',
		marginTop: 40,
	},
	homeViewProposalBlockChild: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	homeViewButtonBlock: {
		width: '100%',
		marginTop: 40,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});