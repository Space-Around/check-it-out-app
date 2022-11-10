
import * as React from 'react';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../styles';

import tabNavigationData from './tabNavigationData';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator          
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 68
        }
      }}
      initialRouteName="Home"
    >
      {tabNavigationData.map((item, idx) => (
        <Tab.Screen 
          key={`tab_item${idx+1}`}
          name={item.name}
          component={item.component}
          options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarItemContainer}>
              <Image
                resizeMode="contain"
                source={item.icon}
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              />
            </View>
          ),
          tabBarShowLabel: false,
          unmountOnBlur: true
        }}
        />        
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
    bottom: Platform.OS === 'ios' ? -5 : 0,
    paddingTop: 10,
    paddingBottom: 10,
  },
  tabBarIcon: {
    width: 30,
    height: 30,
  },
  tabBarIconFocused: {
    tintColor: colors.blue,
  },
});