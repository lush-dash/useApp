import { useIsFocused } from '@react-navigation/native';
import { Input } from '@ui-kitten/components';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import {
  Text, View, StyleSheet, Image, Dimensions, Modal,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart } from 'react-native-chart-kit';
import { getAllKeys, getGoodAnswer, removeAnswer } from '../../../utils/storage';
import { deleteAnswer } from '../../redux/actions/answersCounterActions';
import { getUserThunk, removeUserThunk, setUserThunk } from '../../redux/actions/userActions';

export default function PersonalPage({ navigation }) {
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
  });
  const isFocused = useIsFocused();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [showInputForChangeName, setShowInputForChangeName] = useState(false);

  // Pashal
  const [startGame, setStartGame] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const showInput = () => {
    setShowInputForChangeName(!showInputForChangeName);
  };
  const [itsNotDone, setItsNotDone] = useState(null);
  const [itsDone, setItsDone] = useState(null);

  useEffect(() => {
    // console.log('useeffect');
    try {
      setStartGame(5);
      if (isFocused) {
        dispatch(getUserThunk());
        getGoodAnswer()
          .then((res) => {
            if (res) {
              const result = res.split(',');
              setItsDone(result[0]);
              setItsNotDone(result[1]);
            }
          })
          .catch((e) => console.log(e));
      }
    } catch (error) {
      console.error(error);
    }
  }, [isFocused]);

  const gameHandler = () => {
    if (startGame === 1) {
      navigation.navigate('PaschalGame');
    }
    setModalVisible(!modalVisible);
    setStartGame(startGame - 1);
    setTimeout(() => { setModalVisible(false); }, 500);
  };
  const screenWidth = Dimensions.get('window').width;

  // if (itsDone !== null && itsNotDone !== null) {
  const data = [
    {
      name: 'Верно',
      population: Number(itsDone),
      color: 'rgba(167,236,174, .6)',
      legendFontColor: '#353739',
      legendFontSize: 18,
    },
    {
      name: 'Неверно',
      population: Number(itsNotDone),
      color: 'rgba(254,192,169, .6)',
      legendFontColor: '#353739',
      legendFontSize: 18,
    },
  ];
  // return data;
  // }

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
        {showInputForChangeName ? (
          <View>
            <Input
              textStyle={styles.inputText}
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
        {itsNotDone && (
        <View style={styles.chartContainer}>
          <PieChart
            data={data}
            width={screenWidth}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="0"
            center={[0, -20]}
          />
        </View>
        )}

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
              dispatch(deleteAnswer());
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

const chartConfig = {
  // backgroundGradientFrom: 'red',
  // backgroundGradientFromOpacity: 0,
  // backgroundGradientTo: 'blue',
  // backgroundGradientToOpacity: 0.5,
  color: (opacity = 2) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

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
    marginTop: '15%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    borderRadius: '30',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginBottom: '5%',
    textAlign: 'center',
    backgroundColor: 'white',

  },
  inputText: {
    fontFamily: 'MontserratMedium',
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
  chartContainer: {
    marginTop: '20%',
  },
});
