import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResultsPageTest from './ResultsPageTest';
import SubjectsPageTest from './SubjectsPageTest';

export default function HomeTest() {
  const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator>
      <Tab.Screen name="Subject" component={SubjectsPageTest} />
      <Tab.Screen name="Results" component={ResultsPageTest} />
    </Tab.Navigator>
  );
}
