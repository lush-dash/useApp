import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutPage from './src/components/AboutPage/AboutPage';
import SubjectPage from './src/components/SubjectsPage/SubjectPage';
import PersonalPage from './src/components/PersonalPage/PersonalPage';
import Main from './src/components/Main/Main';
import OptionsPage from './src/components/OptionsPage/OptionsPage';
import QuestionPage from './src/components/QuestionPage/QuestionPage';
import ResultsPage from './src/components/ResultsPage/ResultsPage';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// обертка для табов
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Subjects" component={SubjectPage} options={{ headerShown: false }} />
      <Tab.Screen name="About" component={AboutPage} options={{ headerShown: false }} />

      <Tab.Screen name="Person" component={PersonalPage} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Options" component={OptionsPage} options={{ headerShown: false }} />
            <Stack.Screen name="Question" component={QuestionPage} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={ResultsPage} options={{ headerShown: false }} />
          </Stack.Navigator>
        </Provider>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

export default App;
