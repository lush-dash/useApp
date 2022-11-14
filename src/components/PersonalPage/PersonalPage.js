import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from '@ui-kitten/components';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import {
  Text, View, StyleSheet, Image, Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PersonalPage({ navigation }) {
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
  });
  const [user, setUser] = useState(null);
  const [text, setText] = useState('');
  const [flag, setFlag] = useState(false);
  const chancheFlag = () => {
    setFlag(!flag);
  };
  const getName = async () => {
    try {
      const name = await AsyncStorage.getItem('usernameData');
      setUser(name);
    } catch (error) {
      console.log(error);
    }
  };
  const saveName = async () => {
    try {
      AsyncStorage.setItem('usernameData', text);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteName = async () => {
    try {
      AsyncStorage.removeItem('usernameData');
      setUser('');
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getName();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.userName}>
            Привет,
            {' '}
            {user || 'друг'}
          </Text>
        </View>
        {/* <TouchableOpacity onPress={() => chancheFlag()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Изменить имя</Text>
          </View>
        </TouchableOpacity> */}
        {flag ? (
          <View>
            <Input
              style={styles.input}
              onChangeText={(value) => setText(value)}
              defaultValue={user}
            />

            <TouchableOpacity onPress={() => {
              deleteName();
              saveName();
              setFlag();
              getName();
            }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Ок</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => chancheFlag()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Изменить имя</Text>
            </View>
          </TouchableOpacity>
        )}
        {/* <View>
        <Text style={styles.userName}>
          Прогресс
        </Text>
      </View> */}
        <View>
          <Image
            style={styles.image}
            source={require('../../../assets/student2.png')}
          />

        </View>

        <View>
          <TouchableOpacity onPress={() => {
            deleteName();
            getName();
            setText('');
            navigation.navigate('Main');
          }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Выйти</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: (Dimensions.get('screen').width),
    height: '70%',
  },
  userName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '25',
    fontFamily: 'MontserratMedium',
    color: '#353739',
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
    fontSize: 20,
  },
  input: {
    borderRadius: '30',
    borderWidth: 1,
    borderColor: '#353739',
    marginBottom: '5%',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});
