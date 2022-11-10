import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Text, StyleSheet } from 'react-native';
import blueVersion from '../../styles/colors'
import CustomButton from '../../components/Button'


export default function FavoriteListView({ route, navigation }) {
    return (
      <SafeAreaView style={styles.safeAria}>
			<ScrollView style={styles.favoriteView}>
				<View style={styles.favoriteViewScreenTitleBlock}>
					<Text style={styles.favoriteViewScreenTitle}>Favorite</Text>
				</View>
				<View style={styles.favoriteListBlock}>
					<CustomButton style={styles.favoriteListButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='12/05/2022 10:30 ru' width='100%'/>
					<CustomButton style={styles.favoriteListButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='11/05/2022 11:56 en' width='100%'/>
					<CustomButton style={styles.favoriteListButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='09/05/2022 9:35 ch' width='100%'/>
					<CustomButton style={styles.favoriteListButton} backgroundColor={blueVersion.transparent} borderColor='black' textColor='black' text='05/05/2022 15:14 ru' width='100%'/>
				</View>
			</ScrollView>
		</SafeAreaView>
    );
}

const styles = StyleSheet.create({
	safeAria: {
		flex: 1,		
	},
	favoriteView: {
		flex: 1,	
		width: '100%',
		heught: '100%',
		paddingLeft: '8%',
		paddingRight: '8%',
		overflow: 'scroll'
	},
	favoriteViewScreenTitle: {
		color: 'black',
        fontSize: 40,
        fontWeight: 'normal',
	},
	favoriteViewScreenTitleBlock: {
		width: '100%',
		marginTop: 20,
	},
	favoriteListButton: {
		marginBottom: 20,
	},
	favoriteListBlock: {
		marginTop: 40
	}
});