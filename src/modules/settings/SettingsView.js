import React from 'react';
import { View, Text } from 'react-native';


export default function SettingsView({ route, navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    );
}