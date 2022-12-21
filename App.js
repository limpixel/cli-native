import React, {useState} from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from "./src/projects/Login";
import Register from "./src/projects/Register";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  const Root = () => {
    return (
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false, 
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen name="Login" component={Login} options={{ tabBarIcon: ({focused}) => (
          <View><Icon name={focused ? 'account-lock' : 'account-lock-outline'} size={25} style={{ color: '#4F4A4A' }} /></View>
        ) }} />
        <Tab.Screen name="Register" component={Register} options={{ tabBarIcon: ({focused}) => (
          <View><Icon name={focused ? 'account-plus' : 'account-plus-outline'} size={25} style={{ color: '#4F4A4A' }} /></View>
        ) }} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;