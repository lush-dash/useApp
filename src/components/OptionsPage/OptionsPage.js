import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@ui-kitten/components';
import {
  StyleSheet, View,
} from 'react-native';
import { setOptionsThunk } from '../../redux/actions/optionsActions';
import { setCurrentSubject } from '../../redux/actions/subjectActions';
import OneOption from '../OneOption/OneOption';

export default function SubjectPage() {
  const currSubject = useSelector((state) => state.currSubject);
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();

  // удалить. прописано в OneSubject
  useEffect(() => {
    dispatch(setOptionsThunk('https://useapp.ams3.digitaloceanspaces.com/topicRusLang.json'));
    dispatch(setCurrentSubject('Русский язык'));
  }, []);

  return (
    <View style={{
      flex: 1,
      backgroundColor: currSubject?.color,
      alignItems: 'center',
      justifyContent: 'start',
      width: '100%',
      paddingTop: '40%',
    }}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{currSubject?.title}</Text>
        <Text style={styles.text}>Выбери вариант</Text>
        {options && options.map((el) => <OneOption option={el} key={el.title} />)}
      </View>
    </View>
  );
}
// по клику на вариант:
// onClick={()=>{
//   dispatch(setQuestionsThunk(optionUrl))
// }}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    paddingTop: '20%',
    borderRadius: '30',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '35',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: '5%',
  },
  text: {
    fontSize: '20',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: '10%',
  },
});
