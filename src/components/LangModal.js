import Modal from "react-native-modal";
import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text, SafeAreaView, FlatList, StatusBar, StyleSheet } from 'react-native';

const Item = ({ title, path, checked, selectLang, setUpdateLangFnc, changeModalState, setCurrentLang }) => (
	<TouchableOpacity style={styles.langModalItemButton} onPress={() => selectLang(title, setUpdateLangFnc, changeModalState, setCurrentLang)}>
		{checked && (
			<Image source={require('../../assets/images/icons/check_circle.png')} resizeMode='contain' style={[styles.langModalItemButtonImage, styles.langModalItemButtonImageCheck]} />	
		)}
		<Image source={path} resizeMode='contain' style={styles.langModalItemButtonImage} />
		<Text style={styles.langModalItemButtonText}>{title}</Text>
	</TouchableOpacity>
);

export default function LangModal(props) {	
	let langList = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		  	title: 'Russian',
			path: require('../../assets/images/lang/ru.png'),
			checked: true
		},
		{
		  	id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		  	title: 'English',
			path: require('../../assets/images/lang/en.png'),
			checked: false
		},
		{
		  	id: '58694a0f-3da1-471f-bd96-145571e29d74',
		  	title: 'Spanish',
			path: require('../../assets/images/lang/sp.png'),
			checked: false
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Chinese',
			path: require('../../assets/images/lang/ch.png'),
			checked: false
	  	},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d75',
			title: 'French',
			path: require('../../assets/images/lang/fr.png'),
			checked: false
	  	},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d76',
			title: 'German',
			path: require('../../assets/images/lang/gr.png'),
			checked: false
	  	},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d70',
			title: 'Arabic',
			path: require('../../assets/images/lang/ar.png'),
			checked: false
	  	},
	];

	const [stateLangList, setStateLangList] = React.useState(langList);

	const selectLang = (lang, setUpdateLang, changeModalState, setCurrentLang) => {
		langList.forEach(element => {
			element.checked = false;
		});

		langList.forEach(element => {
			if (lang == element.title) {
				element.checked = true;
				console.log(element.title);
				setCurrentLang(element.title);
			}		
		});

		console.log(langList);

		setUpdateLang(langList);
		setTimeout(() => {
			changeModalState(false);
		}, 200);
	};

	
    return (
      <View>
        <Modal isVisible={props.state}>
        	<View style={styles.langModal}>
				<View style={styles.langHeader}>
					<Text style={styles.langHeaderText}>{'Choose'}</Text>
					<TouchableOpacity
						style={styles.buttonModal}
						onPress={() => props.changeState(!props.state)}
					>
						<Image source={require('../../assets/images/icons/close.png')} style={styles.iconButtonModal}/>
					</TouchableOpacity>
				</View>
                <View>
					<SafeAreaView style={styles.langModalSafeAria}>
						<FlatList
							data={stateLangList}
							renderItem={({ item }) => 
								<Item 
									title={item.title}
									path={item.path}
									checked={item.checked}
									setUpdateLangFnc={setStateLangList}
									selectLang={selectLang}
									changeModalState={props.changeState}
									setCurrentLang={props.setCurrentLang}
								/>}
							keyExtractor={item => item.id}
						/>
					</SafeAreaView>
				</View>
          </View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
    langModal: {
        width: "100%",
        height: "50%",
		backgroundColor: 'white',
		borderRadius: 25,
		padding: 15,
		overflow: 'hidden',
		paddingBottom: 60,		
    },
	langHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 20,
	},
	langHeaderText: {
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
	langModalItemButton: {
		width: '100%',
		height: 50,
		borderWidth: 4,
		borderColor: 'black',
		borderRadius: 25,
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: 40,
		paddingRight: 40,
		marginBottom: 20
	},
	langModalItemButtonText: {
		color: 'black',
		fontWeight: '500',
		fontSize: 20,
	},
	langModalItemButtonImage: {
		width: 40,
		height: 40
	},
	langModalItemButtonImageCheck: {
		position: 'absolute',
		left: 10
	},
	langModalSafeAria: {
		height: '100%'
	}
});