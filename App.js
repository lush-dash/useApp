/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#353739',
      tabBarInactiveTintColor: '#D3D3D3',
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: 'white',
        position: 'absolute',
        borderTopLeftRadius: '30',
        borderTopRightRadius: '30',
        shadowColor: '#000000',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowOffset: {
          height: 1,
          width: 1,
        },
      },
    }}
    >
      <Tab.Screen
        name="Subjects"
        component={SubjectPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="my-library-books" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="paper-plane" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Person"
        component={PersonalPage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
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
              options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen name="Options" component={OptionsPage} options={{ title: '', headerBackTitle: 'К выбору предмета', headerTintColor: '#353739' }} />
            <Stack.Screen
              name="Question"
              component={QuestionPage}
              options={{
                title: '', headerBackTitle: 'Прекратить тест', headerTintColor: '#353739', gestureEnabled: false,
              }}
            />
            <Stack.Screen name="Result" component={ResultsPage} options={{ headerShown: false, gestureEnabled: false }} />
          </Stack.Navigator>
        </Provider>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

export default App;
