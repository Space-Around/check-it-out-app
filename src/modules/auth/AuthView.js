import React from 'react';
import { View, Text } from 'react-native';


export default function AuthView({ route, navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Auth Screen</Text>
      </View>
    );
}