import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text } from 'react-native';
import ResultsPageTest from './ResultsPageTest';
import SubjectsPageTest from './SubjectsPageTest';

export default function HomeTest({ navigation }) {
  console.log('hey!');
  const Tab = createBottomTabNavigator();
  return (
  // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //   <Text>SubjectsPageTest</Text>
  //   <Button
  //     // style={styles.button}
  //     status="success"
  //     title="Subjects"
  //     onPress={() => navigation.navigate('Subjects')}
  //   >
  //     Начать!
  //   </Button>

    <Tab.Navigator>
      <Tab.Screen name="Subjects" component={SubjectsPageTest} />
      <Tab.Screen name="Results" component={ResultsPageTest} />
    </Tab.Navigator>
  // </View>
  );
}
