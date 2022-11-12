import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@ui-kitten/components';
import {
  StyleSheet, View,
} from 'react-native';
import { useFonts } from 'expo-font';
import OneOption from '../OneOption/OneOption';

export default function OptionsPage() {
  const currSubject = useSelector((state) => state.currSubject);
  const options = useSelector((state) => state.options);
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

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
    fontFamily: 'MontserratBold',
  },
  text: {
    fontSize: '20',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: '10%',
    fontFamily: 'MontserratMedium',
  },
});
