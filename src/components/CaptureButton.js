import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View, ViewProps, Platform, Dimensions, Touchable } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Reanimated, {
  cancelAnimation,
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useAnimatedGestureHandler,
  useSharedValue,
  withRepeat,
} from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-ui-lib';
import { Camera, PhotoFile, TakePhotoOptions, TakeSnapshotOptions, VideoFile } from 'react-native-vision-camera';

const PAN_GESTURE_HANDLER_FAIL_X = [-SCREEN_WIDTH, SCREEN_WIDTH];
const PAN_GESTURE_HANDLER_ACTIVE_Y = [-2, 2];

const SCREEN_WIDTH = Dimensions.get('window').width;
const CAPTURE_BUTTON_SIZE = 78;

const BORDER_WIDTH = CAPTURE_BUTTON_SIZE * 0.1;

const _CaptureButton = ({
	camera,
	onMediaCaptured,
	flash,
	enabled,
	setIsPressingButton,
	style,
	...props
}) => {
	const takePhotoOptions = useMemo(
	() => ({
		photoCodec: 'png',
		qualityPrioritization: 'speed',
		flash: flash,
		quality: 90,
		skipMetadata: true,
	}),
	[flash],
	);
	const isPressingButton = useSharedValue(false);
	const recordingProgress = useSharedValue(0);

	//#region Camera Capture
	const takePhoto = useCallback(async () => {
	try {
		if (camera.current == null) throw new Error('Camera ref is null!');

		console.log('Taking photo...');
		const photo = await camera.current.takePhoto(takePhotoOptions);
		onMediaCaptured(photo, 'photo');

		props.onCameraModalOpen();
	} catch (e) {
		console.error('Failed to take photo!', e);
	}
	}, [camera, onMediaCaptured, takePhotoOptions]);


	//#region Tap handler
	const tapHandler = useRef();

	const onHandlerStateChanged = useCallback(
		async ({ nativeEvent: event }) => {
			isPressingButton.value = true;
			setIsPressingButton(true);

			await takePhoto();		

			setTimeout(() => {
				isPressingButton.value = false;
				setIsPressingButton(false);
			}, 500);			
		},
		[isPressingButton, setIsPressingButton, takePhoto],
	);

	const panHandler = useRef();

	const shadowStyle = useAnimatedStyle(
	() => ({
		transform: [
		{
			scale: withSpring(isPressingButton.value ? 1 : 0, {
			mass: 1,
			damping: 35,
			stiffness: 300,
			}),
		},
		],
	}),
	[isPressingButton],
	);
	const buttonStyle = useAnimatedStyle(() => {
	let scale;
	if (enabled) {
		if (isPressingButton.value) {
		scale = withRepeat(
			withSpring(1, {
			stiffness: 100,
			damping: 1000,
			}),
			-1,
			true,
		);
		} else {
		scale = withSpring(0.9, {
			stiffness: 500,
			damping: 300,
		});
		}
	} else {
		scale = withSpring(0.6, {
		stiffness: 500,
		damping: 300,
		});
	}

	return {
		opacity: withTiming(enabled ? 1 : 0.3, {
		duration: 100,
		easing: Easing.linear,
		}),
		transform: [
		{
			scale: scale,
		},
		],
	};
	}, [enabled, isPressingButton]);

	return (
	<TapGestureHandler
		enabled={true}
		ref={tapHandler}
		shouldCancelWhenOutside={false}
		onHandlerStateChange={onHandlerStateChanged}
		maxDurationMs={99999999} // <-- this prevents the TapGestureHandler from going to State.FAILED when the user moves his finger outside of the child view (to zoom)
		simultaneousHandlers={panHandler}
	>
		<Reanimated.View {...props} style={[style]}>
			<PanGestureHandler
				enabled={true}
				ref={panHandler}
				simultaneousHandlers={tapHandler}
			>
				<Reanimated.View style={styles.flex}>
					<Reanimated.View style={[styles.shadow, shadowStyle]} />
					<TouchableOpacity onPress={takePhoto} style={styles.button} />
				</Reanimated.View>
			</PanGestureHandler>
		</Reanimated.View>
	</TapGestureHandler>
	);
};

export const CaptureButton = React.memo(_CaptureButton);

const styles = StyleSheet.create({
  flex: {
    // flex: 1,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	// backgroundColor: 'white'
  },
  shadow: {
    width: CAPTURE_BUTTON_SIZE,
    height: CAPTURE_BUTTON_SIZE,
    borderRadius: CAPTURE_BUTTON_SIZE / 2,
    backgroundColor: '#e34077',
  },
  button: {
    width: CAPTURE_BUTTON_SIZE,
    height: CAPTURE_BUTTON_SIZE,
    borderRadius: CAPTURE_BUTTON_SIZE / 2,
    borderWidth: BORDER_WIDTH,
    borderColor: 'white',
	position: 'relative',
	top: -20
  },
});