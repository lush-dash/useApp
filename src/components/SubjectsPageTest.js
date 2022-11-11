import React from 'react';
import { Button, Text, View } from 'react-native';
// import HomeTest from './HomeTest';

export default function SubjectsPageTest({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SubjectsPageTest</Text>
      <Button title="NavTest" onPress={() => navigation.navigate('NavTest')} />
      {/* <HomeTest /> */}
    </View>
  );
}
