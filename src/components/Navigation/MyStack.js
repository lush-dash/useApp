import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTest from '../HomeTest';
import OptionsPageTest from '../OptionsPageTest';
import NavTest from '../NavTest';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTest} />
      <Stack.Screen name="Options" component={OptionsPageTest} />
      <Stack.Screen name="NavTest" component={NavTest} />
    </Stack.Navigator>
  );
}
