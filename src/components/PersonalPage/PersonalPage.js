import { Input } from '@ui-kitten/components';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import {
  Text, View, StyleSheet, Image, Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { getAllKeys, removeAnswer } from '../../../utils/storage';
import { getUserThunk, removeUserThunk, setUserThunk } from '../../redux/actions/userActions';

export default function PersonalPage({ navigation }) {
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
  });
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [showInputForChangeName, setShowInputForChangeName] = useState(false);
  const showInput = () => {
    setShowInputForChangeName(!showInputForChangeName);
  };

  useEffect(() => {
    try {
      dispatch(getUserThunk());
    } catch (error) {
      console.error(error);
    }
  });

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
        {showInputForChangeName ? (
          <View>
            <Input
              style={styles.input}
              onChangeText={(value) => setText(value)}
              defaultValue={user}
            />

            <TouchableOpacity onPress={() => {
              try {
                dispatch(removeUserThunk());
                dispatch(setUserThunk(text));
                setShowInputForChangeName();
                dispatch(getUserThunk());
              } catch (error) {
                console.error(error);
              }
            }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Ок</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => showInput()}>
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
            try {
              getAllKeys().then((res) => res.map((key) => removeAnswer(key)));
              dispatch(removeUserThunk());
              setText('');
              navigation.navigate('Main');
            } catch (error) {
              console.error(error);
            }
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
    borderRadius: '30',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
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
