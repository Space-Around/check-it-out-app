import Modal from "react-native-modal";
import React, { useState } from 'react';
import { CaptureButton } from './CaptureButton'
import { TouchableOpacity, View, Image, Text, StyleSheet, Linking } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/core';
import Reanimated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedProps, useSharedValue } from 'react-native-reanimated';
import { PinchGestureHandler, PinchGestureHandlerGestureEvent, TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
  zoom: false,
});

export default function CheckItOutModal(props) {
	const camera = React.useRef(null);
  	const [isCameraInitialized, setIsCameraInitialized] = React.useState(false);
	const isFocussed = useIsFocused();
	const isActive = isFocussed;
	const isPressingButton = useSharedValue(false);
	const [response, setResponse] = React.useState(null);

	const [cameraPermissionStatus, setCameraPermissionStatus] = React.useState('not-determined');
	const [flash, setFlash] = React.useState('off');

	// Camera.requestCameraPermission();
	const devices = useCameraDevices();
  	const device = devices.back;
	const supportsFlash = device?.hasFlash ?? false;

	const onFlashPressed = React.useCallback(() => {
		setFlash((f) => (f === 'off' ? 'on' : 'off'));
	}, []);

	const onCameraModalOpen = React.useCallback(() => {
		props.changeState(false);
	}, []);

	const onMediaCaptured = React.useCallback(
		(media, type) => {
			console.log(`Media captured! ${JSON.stringify(media)}`);
		//   navigation.navigate('MediaPage', {
		// 	path: media.path,
		// 	type: type,
		//   });
			props.openResponseModal();
		},
		[],
	);

	const onInitialized = React.useCallback(() => {
		console.log('Camera initialized!');
		setIsCameraInitialized(true);
	}, []);

	const setIsPressingButton = React.useCallback(
		(_isPressingButton) => {
			isPressingButton.value = _isPressingButton;
		},
		[isPressingButton],
	);

	const onError = React.useCallback((error) => {
		console.error(error);
	}, []);

	const requestCameraPermission = React.useCallback(async () => {
		console.log('Requesting camera permission...');
		const permission = await Camera.requestCameraPermission();
		console.log(`Camera permission status: ${permission}`);

		if (permission === 'denied') await Linking.openSettings();
    	setCameraPermissionStatus(permission);
	}, []);

	const openCamera = React.useCallback(async () => {
		await requestCameraPermission();
		
		if (device != null) {
			console.log('Success');
		} else {
			console.log('re-rendering camera page without active camera');
		}

	}, []);

	const onButtonPress = React.useCallback(() => {				
		launchImageLibrary({
			selectionLimit: 1,
			mediaType: 'photo',
			includeBase64: false,
		}, setResponse);
		
	  }, []);

    return (
    <View>
        <Modal
			isVisible={props.state}
			swipeDirection={['down']}
			onBackdropPress={() => props.changeState(!props.state)}
			onSwipeComplete={() => props.changeState(!props.state)}
			style={styles.checkItOutModalWrapper}
		>
		  	<View style={styles.container}>
				{device != null && (
					<GestureHandlerRootView>
						<Reanimated.View style={styles.absoluteFill}>
							<ReanimatedCamera
								ref={camera}
								style={styles.absoluteFill}
								device={device}            
								isActive={true}
								onInitialized={onInitialized}
								onError={onError}
								enableZoomGesture={false}
								photo={true}
								video={false}
								orientation="portrait"
							/>
						</Reanimated.View>
					</GestureHandlerRootView>
				)}
				<View style={styles.closeCameraButton}>					
					<TouchableOpacity style={styles.button} onPress={onCameraModalOpen}>
						<Image source={require('../../assets/images/close_white.png')} style={styles.controlButtonImage}/>
					</TouchableOpacity>
				</View>
				<View style={styles.cameraControls}>
					<View style={styles.galleryButton}>
						{supportsFlash && (
						<TouchableOpacity style={styles.button}
							onPress={onButtonPress}
						  >
							<Image source={require('../../assets/images/gallery.png')} style={styles.controlButtonImage}/>
						</TouchableOpacity>
						)}
					</View>
					<CaptureButton
						style={styles.captureButton}
						camera={camera}
						flash={supportsFlash ? flash : 'off'}
						enabled={isCameraInitialized && isActive}
						setIsPressingButton={setIsPressingButton}
						onMediaCaptured={onMediaCaptured}
						onCameraModalOpen={props.changeState}
					/>
					<View style={styles.flashButton}>
						{supportsFlash && (
						<TouchableOpacity style={[styles.button, {opacity: flash == 'on' ? 1 : 0.5}]} onPress={onFlashPressed}>
							<Image source={require('../../assets/images/flash.png')} style={styles.controlButtonImage}/>
						</TouchableOpacity>
						)}
					</View>
				</View>
    		</View>
        </Modal>
    </View>
    );
}

const styles = StyleSheet.create({
	checkItOutModalWrapper: {
		justifyContent: 'flex-end',
    	margin: 0,
	},
    checkItOutModal: {
        width: "100%",
		backgroundColor: 'white',
		borderRadius: 25,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		padding: 25
    },
	checkItOutModalHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	checkItOutModalHeaderText: {
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
	checkItOutModalBody: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,		
	},
	checkItOutModalButton: {
		borderColor: 'black',
		borderWidth: 4,
		borderRadius: 10,
		padding: 10
	},
	checkItOutModalButtonImage: {
		width: 100,
		height: 100
	},
	absoluteFill: {
		width: '100%',
		height: '100%',
	},
	rightButtonRow: {
		position: 'absolute',
		right: 0,
		top: 0,
	},
	button: {
		width: 50,
		height: 50,
		padding: 15,
		borderRadius: 50,
		// backgroundColor: 'rgba(140, 140, 140, 0.3)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	captureButton: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'white',
		position: 'relative'
	},
	cameraControls: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: '10%',
		paddingLeft: 60,
		paddingRight: 60,
		paddingBottom: 50,		
		bottom: 0,
		position: 'absolute'
	},
	controlButtonImage: {
		width: 30,
		height: 30,
		backgroundColor: 'transparent'	
	},
	flashButton: {
		backgroundColor: 'transparent'
	},
	closeCameraButton: {
		position: 'absolute',
		top: 20,
		right: 50
	}
});