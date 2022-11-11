import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';
// import Main from './src/components/Main/Main';
import store from './src/redux/store';

import MyStack from './src/components/Navigation/MyStack';

function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>

        {/* <Main /> */}

        <Provider store={store}>
          {/* <View style={styles.container}> */}
          <MyStack />
          {/* </View> */}
        </Provider>
      </ApplicationProvider>
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
