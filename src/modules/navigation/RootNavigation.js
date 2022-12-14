import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigationData from './stackNavigationData';
import AuthNavigator from './AuthNavigator';

const Stack = createNativeStackNavigator();


export default function NavigatorView(props) {
    // if (authState.isLoggedIn || authState.hasSkippedLogin) {
    return <AuthNavigator />;
    // }
  
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {StackNavigationData.map((item, idx) => (
          <Stack.Screen
            key={`stack_item-${idx+1}`}
            name={item.name} 
            component={item.component}           
          />
        ))}
      </Stack.Navigator>
    );
}