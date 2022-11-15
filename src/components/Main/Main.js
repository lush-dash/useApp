/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet, View, Text, Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getUserThunk, setUserThunk } from '../../redux/actions/userActions';

export default function Main({ navigation }) {
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
  });
  const [showUserLogin, setshowUserLogin] = useState(false);
  const [text, setText] = useState('');
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const changeUserLogin = () => {
    setshowUserLogin(!showUserLogin);
  };

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);
  if (!fontsLoaded) return null;
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Svg
          style={styles.topWave}
          viewBox="0 0 1440 320"
          height={150}
          width={Dimensions.get('screen').width}
        >
          <Path fill="#c1e6ee" fillOpacity="1" d="M0,128L30,117.3C60,107,120,85,180,80C240,75,300,85,360,122.7C420,160,480,224,540,234.7C600,245,660,203,720,160C780,117,840,75,900,96C960,117,1020,203,1080,245.3C1140,288,1200,288,1260,261.3C1320,235,1380,181,1410,154.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z" />
        </Svg>
      </View>

      <KeyboardAwareScrollView style={styles.scroll}>
        <View style={styles.innerContainer}>
          <Text style={styles.myText}>Добро пожаловать в USEApp</Text>
          <Image
            source={require('../../../assets/paper-plane-grey.png')}
            style={styles.image}
          />
          {(user === null || user === '') ? (
            <>
              {showUserLogin && (
              <>
                <Text style={styles.myText}>
                  Введи имя:
                </Text>
                <Input
                  onChangeText={(value) => setText(value)}
                  style={styles.input}
                  defaultValue={text}
                  textStyle={styles.inputText}
                />

                <TouchableOpacity onPress={() => {
                  navigation.navigate('Home');
                  setText('');
                  dispatch(setUserThunk(text));
                }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Далее</Text>
                  </View>
                </TouchableOpacity>

              </>
              )}

              {!showUserLogin && (
              <>
                <Text style={styles.myText}>
                  Проведи время с пользой
                </Text>
                <TouchableOpacity onPress={() => {
                  changeUserLogin();
                }}
                >
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
                  <Text style={styles.buttonText}>Продолжить</Text>
                </View>
              </TouchableOpacity>

            </>

          )}
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.boxBottom}>
        <Svg
          style={styles.bottomWave}
          height={100}
          width={Dimensions.get('screen').width}
          viewBox="0 0 1440 320"
        >
          <Path fill="#b0d0f5" fillOpacity="1" d="M0,64L34.3,53.3C68.6,43,137,21,206,21.3C274.3,21,343,43,411,64C480,85,549,107,617,128C685.7,149,754,171,823,176C891.4,181,960,171,1029,138.7C1097.1,107,1166,53,1234,53.3C1302.9,53,1371,107,1406,133.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    backgroundColor: '#c1e6ee',
    height: 40,
  },
  bottomWave: {
    position: 'absolute',
    bottom: 0,
  },
  boxBottom: {
    backgroundColor: '#b0d0f5',
    height: 20,
  },
  scroll: {
    display: 'flex',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: (Dimensions.get('screen').height - 50),
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
    borderRadius: '30',
    borderWidth: 1,
    marginBottom: '7%',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderColor: '#D3D3D3',
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
  inputText: {
    fontFamily: 'MontserratMedium',
  },
});
