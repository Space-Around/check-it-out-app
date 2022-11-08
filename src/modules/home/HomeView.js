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
import blueVersion from '../../styles/colors'


export default function HomeView({ route, navigation }) {
	return (
		<View style={styles.homeView}>
			<View style={styles.homeViewWelcomeBlock}>
				<WelcomeTitle text='Max!'/>
				<IconButton icon='settings'/>
			</View>
			<View style={styles.homeViewPlanBlock}>                
				<Title text='Current plan'/>
				<PlanBlock text='Standart'/>
			</View>
			<View style={styles.homeViewRequestsBlock}>
				<View style={styles.homeViewRequestsBlockChild}>
					<Title text='Requests in month'/>
					<IconButton icon='plus'/>
				</View>
				<RequestsBlock bigText='210' smallText='/210'/>
			</View>
			<View style={styles.homeViewRequestsBlock}>
				<View style={styles.homeViewRequestsBlockChild}>
					<Title text='Proposal'/>
					<IconButton icon='persentage'/>
				</View>				
				<ProposalBlock text='Subscription for one year' bigText='20' smallText='%'/>
			</View>
			<View style={styles.homeViewButtonBlock}>
				<LogoButton icon='translate'/>
				<CustomButton backgroundColor={blueVersion.blue} textColor='white' text='Check it out!' width='70%'/>
			</View>
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