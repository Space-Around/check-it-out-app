import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigationData from './stackNavigationData';

const Stack = createNativeStackNavigator();


export default function NavigatorView(props) {
    // if (authState.isLoggedIn || authState.hasSkippedLogin) {
    //     return <AppNavigator />;
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