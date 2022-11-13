import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from '@ui-kitten/components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { addBadAnswer, addGoodAnswer } from '../../redux/actions/answersCounterActions';
import { setCurrentQuestion } from '../../redux/actions/currentQuestionActions';

export default function QuestionPage({ navigation }) {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  // const currentQuestion = useSelector((state) => state.currentQuestion);

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [trueAnswer, setTrueAnswer] = useState(true);

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

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.myH2}>
          Вопрос
          {' '}
          {index + 1}
        </Text>
        <Text style={styles.text}>{questions[index]?.q}</Text>
        {!trueAnswer ? (
          <>
            <Text>Правильный ответ:</Text>
            <Text>{questions[index]?.a}</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  text: {
    fontSize: '16',
    margin: '5%',
    fontWeight: 'bold',
    color: '#353739',
    textAlign: 'justify',
  },
  input: {
    width: '70%',
    borderRadius: '30',
    borderWidth: 1,
    borderColor: '#353739',
    margin: '7%',
    textAlign: 'center',
  },
  myH2: {
    textAlign: 'center',
    fontSize: '36',
    margin: '5%',
    marginTop: '5%',
  },
  button: {
    backgroundColor: '#353739',
    width: 200,
    height: 36,
    borderRadius: '30',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
