import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from '@ui-kitten/components';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { setQuestionsThunk } from '../../redux/actions/questionsActions';
import { setCurrentOption } from '../../redux/actions/currentOptionActions';
import { clearTimer } from '../../redux/actions/timerActions';
import { getOneSubjAnswer } from '../../../utils/storage';

export default function OneOption({ option, navigation, isSwitchOn }) {
  const currSubject = useSelector((state) => state.currSubject);
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
  });
  const [itsDone, setItsDone] = useState(null);
  const [itsNotDone, setItsNotDone] = useState(null);
  const isFocused = useIsFocused();

  // console.log(option, 'option!!!');
  useEffect(() => {
    getOneSubjAnswer(option)
      .then((res) => {
        if (res) {
          const result = res.split(',');
          setItsDone(result[0]);
          setItsNotDone(Number(result[1]) + Number(result[0]));
        }
      })
      .catch((e) => console.log(e));
  }, [isFocused]);

  // console.log(itsDone, 'itsDone');

  if (!fontsLoaded) return null;

  if (isSwitchOn && itsDone) return null;

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setQuestionsThunk(option.url));
        dispatch(setCurrentOption(option));
        dispatch(clearTimer());
        navigation.navigate('Question');
      }}
      style={styles.container}
    >
      <View
        style={{
          width: '90%',
          height: 110,
          borderRadius: 30,
          margin: 10,
          borderWidth: 3,
          borderColor: currSubject?.color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {itsDone ? (
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.text}>{option.title}</Text>
              <Text style={styles.smallText}>
                {` Правильных ответов: ${itsDone} из ${(Number(itsNotDone) + Number(itsDone))}`}
              </Text>
            </View>
            <Ionicons style={styles.icon} name="checkmark-circle" color={currSubject?.darkColor} size={30} />
          </View>
        ) : (
          <Text style={styles.text}>{option.title}</Text>
        )}

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: '25',
    fontFamily: 'MontserratSemiBold',
    color: '#353739',
    marginLeft: '5%',
    justifySelf: 'center',
  },
  results: {
    fontSize: '25',
    fontFamily: 'MontserratSemiBold',
    color: '#353739',
  },
  container: {
    width: '90%',
    height: 110,
    borderRadius: 30,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallText: {
    fontFamily: 'MontserratMedium',
    marginLeft: '4%',
  },
  icon: {
    marginRight: '3%',
  },
});
