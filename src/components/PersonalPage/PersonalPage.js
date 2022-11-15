import { Input } from '@ui-kitten/components';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import {
  Text, View, StyleSheet, Image, Dimensions, Alert, Modal,
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
  // Pashal
  const [startGame, setStartGame] = useState(5);
  const [modalVisible, setModalVisible] = useState(false);
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

  const gameHandler = () => {
    if (startGame === 1) {
      setStartGame(5);
      navigation.navigate('PaschalGame');
    }
    setModalVisible(!modalVisible);
    setStartGame(startGame - 1);
    setTimeout(() => { setModalVisible(false); }, 500);
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Пасхалка начнется через
              {' '}
              {startGame}
            </Text>
          </View>
        </View>
      </Modal>
      {/* Modal */}

      <View style={styles.innerContainer}>
        <View>
          <TouchableOpacity onPress={() => gameHandler()}>
            <Text style={styles.userName}>
              Привет,
              {' '}
              {user || 'друг'}
            </Text>
          </TouchableOpacity>
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
  modalView: {
    // height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    textAlign: 'center',
    color: 'black',
  },
  centeredView: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
