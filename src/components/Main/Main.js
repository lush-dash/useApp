/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet, View, Text,
} from 'react-native';
import WavyBackground from 'react-native-wavy-background';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main({ navigation }) {
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
  });
  const [flag, setFlag] = useState(false);
  const [text, setText] = useState('');
  const [user, setUser] = useState(null);
  const chancheFlag = () => {
    setFlag(!flag);
  };

  const saveName = async () => {
    try {
      AsyncStorage.setItem('usernameData', text);
    } catch (error) {
      console.log(error);
    }
  };

  const getName = async () => {
    try {
      const name = await AsyncStorage.getItem('usernameData');
      setUser(name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getName();
  }, []);
  console.log(user);
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <WavyBackground
        marginBottom={0}
        height={200}
        width={1100}
        amplitude={20}
        frequency={1}
        offset={150}
        color="#c1e6ee"
      />
      <View style={styles.innerContainer}>
        <Text style={styles.myText}>Добро пожаловать в USEApp</Text>
        {user === null ? (
          <>
            {flag && (
            <>
              <Text style={styles.myText}>
                Введи имя:
              </Text>
              <Input
                onChangeText={(value) => setText(value)}
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
            <Image
              source={require('../../../assets/paper-plane-grey.png')}
              style={styles.image}
            />

            {!flag && (
            <>
              <Text style={styles.myText}>
                Проведи время с пользой
              </Text>
              <TouchableOpacity onPress={() => chancheFlag()}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Начать</Text>
                </View>
              </TouchableOpacity>
            </>
            )}
          </>

        ) : (

          <>
            <Text style={styles.myText}>
              C возвращением,
              {' '}
              {user}
            </Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Home');
            }}
            >

              <View style={styles.button}>
                <Text style={styles.buttonText}>Продлжить</Text>
              </View>
            </TouchableOpacity>

          </>

        )}
      </View>
      <WavyBackground
        height={300}
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
    backgroundColor: 'white',
  },
  innerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  myText: {
    textAlign: 'center',
    fontSize: '30%',
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
    borderWidth: 1,
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
    color: 'white',
    fontFamily: 'MontserratMedium',
    fontSize: '25%',
  },
});
