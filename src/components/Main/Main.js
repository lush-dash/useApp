import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet, TextInput, View,
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName, setUserName } from '../../../utils/storage';
import { getUserThunk } from '../../redux/actions/userActions';

export default function Main({ navigation }) {
  const [flag, setFlag] = useState(false);
  const [text, onChangeText] = useState('');
  const [user, setUser] = useState(null);
  // const user = useSelector((store) => store.user);
  // const dispatch = useDispatch(); // console.log('flag:', flag);
  const chancheFlag = () => {
    setFlag(!flag);
  };
  const saveName = async () => {
    try {
      console.log(text, ' sometext');
      await setUserName(text);
    } catch (err) {
      console.error(err);
    }
    console.log('xexexe', text);
  };
  useEffect(() => {
    // const somth = dispatch(getUserThunk(getUserName()));
    // getUserName();
    // console.log(somth, 'somth');
    // setUser(getUserName());
    setUser(getUserName())
    
  }, []);
  console.log(user, 'userinMain');
  return (
    <View style={styles.container}>

      <Text style={styles.myText} category="h3">Добро пожаловать в USEApp</Text>
      <Image
        source={require('../../image/mainIcon.jpg')}
        style={{ width: 200, height: 200 }}
      />

      {user !== null ? (
        <>
          <Text style={styles.myText} category="h3">
            C возвращением,
            {user}
          </Text>
          <Button
            onPress={() => {
              navigation.navigate('Home');
            }}
            onstyle={styles.button}
            status="success"
            title="Home"
          >
            Сохранить
          </Button>
        </>

      ) : (
        <>
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
                saveName();
                navigation.navigate('Home');
              }}
              onstyle={styles.button}
              status="success"
              title="Home"
            >
              Сохранить
            </Button>
          </>
          )}
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
