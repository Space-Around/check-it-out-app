import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackAuthNavigationData from './stackAuthNavigationData';

const Stack = createNativeStackNavigator();

export default function AuthNavigator(props) {  
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {StackAuthNavigationData.map((item, idx) => (
          <Stack.Screen
            key={`stack_item-${idx+1}`}
            name={item.name} 
            component={item.component}           
          />
        ))}
      </Stack.Navigator>
    );
}