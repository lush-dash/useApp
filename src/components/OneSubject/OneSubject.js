/* eslint-disable global-require */
import React from 'react';
import {
  ImageBackground,
  StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { Text } from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import { useFonts } from 'expo-font';
import { setOptionsThunk } from '../../redux/actions/optionsActions';
import { setCurrentSubject } from '../../redux/actions/subjectActions';

export default function OneSubject({ subject, navigation }) {
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
  });

  const dispatch = useDispatch();
  const backgroundForRus = require('../../../assets/rus.png');
  const backgroundForSoc = require('../../../assets/soc.png');

  let backgroundImage;
  if (subject.title === 'Русский язык') backgroundImage = backgroundForRus;
  if (subject.title === 'Обществознание') backgroundImage = backgroundForSoc;

  const fuck = () => navigation.navigate('Options');

  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity
      style={styles.oneSubject}
      onPress={() => {
        dispatch(setOptionsThunk(subject.url));
        dispatch(setCurrentSubject(subject.title));
        fuck();
      }}
    >
      <View style={styles.oneSubject}>
        <ImageBackground
          imageStyle={{ borderRadius: 30 }}
          source={backgroundImage}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.subjectName}>{subject.title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  oneSubject: {
    width: '90%',
    height: 110,
    borderRadius: 30,
    margin: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 30,
  },
  subjectName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '25',
    fontFamily: 'MontserratMedium',
  },
});
