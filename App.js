import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Main from './src/components/Main/Main';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Main />
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
