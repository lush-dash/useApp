/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from '@ui-kitten/components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFonts } from 'expo-font';
import { addBadAnswer, addGoodAnswer } from '../../redux/actions/answersCounterActions';
import { setCurrentQuestion } from '../../redux/actions/currentQuestionActions';
import Timer from '../Timer/Timer';

export default function QuestionPage({ navigation }) {
  const questions = useSelector((state) => state.questions);
  const currSubject = useSelector((state) => state.currSubject);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);
  const [answer, setAnswer] = useState('');
  const [trueAnswer, setTrueAnswer] = useState(true);
  const [showRight, setShowRight] = useState(false);
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  const timerValue = questions.length * 60;

  const clickHandler = () => {
    if (answer.toLowerCase() !== questions[index]?.a.toLowerCase() || answer.toLowerCase() === '') {
      dispatch(addBadAnswer());
      setTrueAnswer(!trueAnswer);
    } else {
      dispatch(addGoodAnswer());
      setShowRight(true);
      setTimeout(() => {
        setIndex(index + 1);
        setAnswer('');
        setShowRight(false);
      }, 800);

      if (index === questions.length - 2) {
        setStopTimer(true);
        navigation.navigate('Result');
      }
      dispatch(setCurrentQuestion(questions[index]));
    }
  };

  const nextHandler = () => {
    setIndex(index + 1);
    if (index === questions.length - 2) {
      setStopTimer(true);
      navigation.navigate('Result');
    }
    setAnswer('');
    setTrueAnswer(true);
    dispatch(setCurrentQuestion(questions[index]));
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.innerContainer}>
          <View style={{
            marginTop: '5%',
            height: '3%',
            backgroundColor: currSubject?.color,
            borderRadius: '30',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 350,
            minHeight: 35,
          }}
          >
            <Text style={styles.textProgress}>
              {`Вопрос ${index + 1} из ${questions?.length}`}
              {' '}
            </Text>
          </View>
          {/* <Text style={styles.myH2}>
            Вопрос №
            {' '}
            {index + 1}
          </Text> */}
          {questions.length ? (
            <Timer
              navigation={navigation}
              timerValue={timerValue}
              stopTimer={stopTimer}
            />
          ) : null }
          <Text style={styles.text}>{questions[index]?.q.split('\n').join('\n\n')}</Text>
          {!trueAnswer ? (
            <>
              <View style={styles.answerBubble}>
                <Text style={styles.answerText}>{`Правильный ответ: ${questions[index]?.a}`}</Text>
              </View>
              <TouchableOpacity onPress={nextHandler}>
                <View style={{
                  backgroundColor: currSubject?.color,
                  minWidth: 250,
                  minHeight: 50,
                  borderRadius: '30',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10%',
                }}
                >
                  <Text style={styles.buttonText}>
                    Следующий вопрос
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {showRight && (
              <View>
                <Text style={styles.textProgressAlert}>
                  Верно
                  ✅
                </Text>
              </View>
              )}
              <Input
                style={styles.input}
                placeholder="Введите ответ"
                onChangeText={setAnswer}
                defaultValue={answer}
                onSubmitEditing={clickHandler}
              />
              <TouchableOpacity onPress={clickHandler}>
                <View style={{
                  backgroundColor: currSubject?.color,
                  minWidth: 250,
                  minHeight: 50,
                  borderRadius: '30',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10%',
                }}
                >
                  <Text style={styles.buttonText}>
                    Ответить
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </KeyboardAwareScrollView>
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
  innerContainer: {
    alignItems: 'center',
  },
  textProgress: {
    fontSize: '15',
    fontFamily: 'MontserratMedium',
    color: '#353739',
  },
  textProgressAlert: {
    fontSize: '24',
    fontFamily: 'MontserratMedium',
    color: '#0abb06',
    fontWeight: 'bold',
  },
  text: {
    margin: '5%',
    fontWeight: 'bold',
    color: '#353739',
    textAlign: 'left',
    fontSize: '15',
    fontFamily: 'MontserratMedium',
  },
  input: {
    minWidth: '70%',
    borderRadius: '30',
    borderWidth: 1,
    borderColor: '#353739',
    margin: '5%',
    fontFamily: 'MontserratMedium',
    backgroundColor: '#fff',
  },
  myH2: {
    textAlign: 'center',
    margin: '5%',
    marginTop: '5%',
    fontSize: 35,
    fontFamily: 'MontserratBold',
    color: '#353739',
  },
  answerBubble: {
    borderWidth: 1,
    minWidth: 250,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30',
    marginBottom: '5%',
    padding: 5,
  },
  answerText: {
    fontSize: 18,
    fontFamily: 'MontserratMedium',
    color: '#f97777',
  },
  buttonText: {
    color: '#353739',
    fontFamily: 'MontserratMedium',
    fontSize: 18,
  },
});
