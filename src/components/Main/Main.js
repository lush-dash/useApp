import React, { useState } from 'react';
import {
  Image,
  StyleSheet, TextInput, View,
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { setUserName } from '../../../utils/storage';

export default function Main({ navigation }) {
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
  return (
    <View style={styles.container}>
      <Text style={styles.myText} category="h3">Добро пожаловать в USEApp</Text>
      <Image
        source={require('../../../assets/mainIcon.jpg')}
        style={{ width: 200, height: 200 }}
      />
      {!flag && (
        <>
          <Text style={styles.myText} category="h3">
            Привет! Давай начнем учиться!
            Проведи время с пользой.
          </Text>
          <Button onPress={() => chancheFlag()} onstyle={styles.button} status="success">
            Начать!
          </Button>
        </>
      )}
      {flag && (
        <>
          <Text style={styles.myText} category="h3">
            Введите имя:
          </Text>
          <TextInput
            onChangeText={onChangeText}
            style={styles.input}
            defaultValue={text}
            placeholder="name"
          />
          <Button
            onPress={() => {
              navigation.navigate('Home');
              saveName();
            }}
            onstyle={styles.button}
            status="success"
            title="Home"
          >
            Сохранить
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    textAlign: 'center',
    fontSize: '32',
    margin: '5%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
