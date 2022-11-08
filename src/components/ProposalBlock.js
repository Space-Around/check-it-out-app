import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';


export default function ProposalBlock(props) {    
    return (
        <TouchableOpacity style={styles.proposalBlock}>
            <View style={styles.proposalBlockChildren}>
                <Text style={styles.proposalBlockText}>{props.text}</Text>            
            </View>
            <View style={styles.proposalBlockChildren}>
                <Text style={styles.proposalBlockBigText}>{props.bigText}</Text>
                <Text style={styles.proposalBlockSmallText}>{props.smallText}</Text>
            </View>
            <Image source={require('../../assets/images/proposal_bg.png')} resizeMode='contain' style={styles.proposalBlockBg} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    proposalBlock: {
        width: '80%',
        height: 90,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    proposalBlockChildren: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    proposalBlockText: {
        fontWeight: 'thin',
        fontSize: 16,
        color: 'black',        
    },
    proposalBlockBigText: {
        fontWeight: 'bold',
        fontSize: 60,
        color: 'black'
    },
    proposalBlockSmallText: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'black'
    },
    proposalBlockBg: {
        position: 'absolute',
        width: '100%'
    }
});