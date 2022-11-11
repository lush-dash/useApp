import React from 'react';
import { Button, Text, View } from 'react-native';

export default function NavTest({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test !!!! Privet</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
