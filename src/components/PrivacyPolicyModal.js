import Modal from "react-native-modal";
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';


export default function PrivacyPolicyModal(props) {
    return (
      <View>
        <Modal isVisible={props.state}>			
			<View style={styles.privacyPolicyModal}>
				<View style={styles.privacyPolicyModalHeader}>
					<Text style={styles.privacyPolicyModalHeaderText}>{'Privacy policy'}</Text>
					<TouchableOpacity
						style={styles.buttonModal}
						onPress={() => props.changeState(!props.state)}
					>
						<Image source={require('../../assets/images/icons/close.png')} style={styles.iconButtonModal}/>
					</TouchableOpacity>
				</View>
				<SafeAreaView style={styles.safeAria}>
					<ScrollView style={styles.scrollView}>
						<Text style={styles.ppTitle}>
                        AGREEMENT TO TERMS
                        </Text>
                        <Text style={styles.ppParagraph}>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and [business entity name] (“we,” “us” or “our”), concerning your access to and use of the [website name.com] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                        </Text>
                        <Text style={styles.ppParagraph}>
                        You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                        </Text>
                        <Text style={styles.ppParagraph}>
                        Supplemental Terms of Service or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.
                        </Text>
                        <Text style={styles.ppParagraph}>
                        We will alert you about any changes by updating the “Last updated” date of these Terms of Service, and you waive any right to receive specific notice of each such change. 
                        </Text>
                        <Text style={styles.ppParagraph}>
                        It is your responsibility to periodically review these Terms of Service to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Service by your continued use of the Site after the date such revised Terms of Service are posted. 
                        </Text>
                        <Text style={styles.ppParagraph}>
                        The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. 
                        </Text>
                        <Text style={styles.ppParagraph}>
                        Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. 
                        </Text>
                        <Text style={styles.ppParagraph}>
                        These terms of service were created using Termly.
                        </Text>
                        <Text style={styles.ppParagraph}>
                        Option 1: The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to register for the Site. 
                        </Text>
                        <Text style={styles.ppParagraph}>
                        Option 2: [The Site is intended for users who are at least 13 years of age.] All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Service prior to you using the Site. 
                        </Text>
					</ScrollView>
				</SafeAreaView>
			</View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
    privacyPolicyModal: {
        width: "100%",
        height: "80%",
		backgroundColor: 'white',
		borderRadius: 25,
		padding: 15,
		overflow: 'hidden'
    },
	safeAria: {
		width: "100%",
        height: "100%",
		paddingBottom: 50,
		overflow: 'hidden'
	},
	scrollView: {
		width: "100%",
        height: "100%",
	},
	privacyPolicyModalHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	privacyPolicyModalHeaderText: {
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
    ppTitle: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black',
        paddingBottom: 10,
        paddingTop: 40
    },
    ppParagraph: {
        fontWeight: '400',
        fontSize: 15,
        color: 'black',
        paddingBottom: 10,
        paddingTop: 10
    }    
});