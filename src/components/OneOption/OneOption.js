import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from '@ui-kitten/components';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { setQuestionsThunk } from '../../redux/actions/questionsActions';

export default function OneOption({ option }) {
  const currSubject = useSelector((state) => state.currSubject);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setQuestionsThunk(option.url));
      }}
      style={styles.container}
    >
      <View style={{
        width: '90%',
        height: 110,
        borderRadius: 30,
        margin: 10,
        borderWidth: 3,
        borderColor: currSubject?.color,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Text style={styles.text}>{option.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: '25',
    marginLeft: '10%',
    fontWeight: 'bold',
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
});
