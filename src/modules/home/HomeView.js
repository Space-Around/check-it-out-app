import React from 'react';
import { View, Text } from 'react-native';


export default function HomeView({ route, navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
}