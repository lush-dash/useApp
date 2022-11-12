/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  Image,
  StyleSheet, TextInput, View, Text, Button,
} from 'react-native';
// import { Text, Button } from '@ui-kitten/components';
// import { Button } from '@ui-kitten/components';
import WavyBackground from 'react-native-wavy-background';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from '@ui-kitten/components';
import { setUserName } from '../../../utils/storage';

export default function Main({ navigation }) {
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
  });
  const [flag, setFlag] = useState(false);
  const [text, onChangeText] = useState('');
  // console.log('flag:', flag);
  const chancheFlag = () => {
    setFlag(!flag);
  };
  const saveName = () => {
    setUserName(text);
    // console.log('xexexe', text);
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <WavyBackground
        height={300}
        width={1100}
        amplitude={20}
        frequency={1}
        offset={150}
        color="#c1e6ee"
      />
      <View style={styles.innerContainer}>
        <Text style={styles.myText}>Добро пожаловать в USEApp</Text>
        <Image
          source={require('../../../assets/paper-plane-grey.png')}
          style={styles.image}
        />
        {!flag && (
        <>
          <Text style={styles.myText}>
            Проведи время с пользой
          </Text>
          <TouchableOpacity onPress={() => { chancheFlag(); }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Начать</Text>
            </View>
          </TouchableOpacity>
        </>
        )}
        {flag && (
        <>
          <Text style={styles.myText}>
            Введи имя:
          </Text>
          <Input
            onChangeText={onChangeText}
            style={styles.input}
            defaultValue={text}
          />

          <TouchableOpacity onPress={() => {
            navigation.navigate('Home');
            saveName();
          }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Далее</Text>
            </View>
          </TouchableOpacity>

        </>
        )}
      </View>
      <WavyBackground
        height={400}
        width={1100}
        amplitude={25}
        frequency={1}
        offset={230}
        color="#b0d0f5"
        bottom
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fa',
  },
  innerContainer: {
    backgroundColor: '#f4f6fa',
    alignItems: 'center',
    jusifySelf: 'start',
  },
  myText: {
    textAlign: 'center',
    fontSize: '32',
    marginBottom: '5%',
    fontFamily: 'MontserratMedium',
    color: '#353739',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: '5%',
  },
  input: {
    width: '70%',
    fontFamily: 'MontserratMedium',
    borderRadius: '30',
    borderWidth: 3,
    borderColor: '#353739',
    marginBottom: '7%',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#353739',
    width: 200,
    height: 50,
    borderRadius: '30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#f4f6fa',
    fontFamily: 'MontserratMedium',
    fontSize: 25,
  },
});
