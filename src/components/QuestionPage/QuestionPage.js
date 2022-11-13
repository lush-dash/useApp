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
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [trueAnswer, setTrueAnswer] = useState(true);
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  const timerValue = questions.length * 60;

  const clickHandler = () => {
    if (answer.toLowerCase() !== questions[index]?.a.toLowerCase()) {
      dispatch(addBadAnswer());
      setTrueAnswer(!trueAnswer);
    } else {
      dispatch(addGoodAnswer());
      setIndex(index + 1);
      setAnswer('');
      if (index === questions.length - 2) { navigation.navigate('Result'); }
      dispatch(setCurrentQuestion(questions[index]));
    }
  };

  const nextHandler = () => {
    setIndex(index + 1);
    if (index === questions.length - 2) { navigation.navigate('Result'); }
    setAnswer('');
    setTrueAnswer(true);
    dispatch(setCurrentQuestion(questions[index]));
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.innerContainer}>
          <Text style={styles.myH2}>
            Вопрос №
            {' '}
            {index + 1}
          </Text>
          {questions.length ? (
            <Timer
              navigation={navigation}
              timerValue={timerValue}
            />
          ) : <></>}
          <Text style={styles.text}>{questions[index]?.q.split('\n').join('\n\n')}</Text>
          {!trueAnswer ? (
            <>
              <View style={styles.answerBubble}>
                <Text style={styles.answerText}>{`Правильный ответ: ${questions[index]?.a}`}</Text>
              </View>
              <TouchableOpacity onPress={nextHandler}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    Следующий вопрос
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Input
                style={styles.input}
                placeholder="Введите ответ"
                onChangeText={setAnswer}
                defaultValue={answer}
                onSubmitEditing={clickHandler}
              />
              <TouchableOpacity onPress={clickHandler}>
                <View style={styles.button}>
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
    paddingTop: '15%',
  },
  innerContainer: {
    alignItems: 'center',
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
  },
  myH2: {
    textAlign: 'center',
    margin: '5%',
    marginTop: '5%',
    fontSize: 35,
    fontFamily: 'MontserratBold',
    color: '#353739',
  },
  button: {
    backgroundColor: '#353739',
    minWidth: 250,
    minHeight: 40,
    borderRadius: '30',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  answerBubble: {
    borderWidth: 1,
    minWidth: 250,
    minHeight: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30',
    marginBottom: '5%',
    padding: 5,
  },
  answerText: {
    fontSize: 18,
    fontFamily: 'MontserratMedium',
    color: '#353739',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'MontserratMedium',
    fontSize: 18,
  },
});
