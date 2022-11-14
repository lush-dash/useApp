import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@ui-kitten/components';
import {
  ActivityIndicator,
  StyleSheet, View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { setTopicsThunk } from '../../redux/actions/topicsActions';
import OneSubject from '../OneSubject/OneSubject';

export default function SubjectPage({ navigation }) {
  const topics = useSelector((state) => state.topics);
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
  });

  useEffect(() => {
    dispatch(setTopicsThunk());
  }, []);

  if (!fontsLoaded || !topics.length) {
    return (
      <View style={{
        justifyContent: 'center',
        height: '100%',
      }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
      >
        <Text style={styles.title}>Предметы</Text>
        <Text style={styles.text}>Выбери предмет</Text>
        <View style={styles.innerContainer}>
          {topics && topics.map((el) => (
            <OneSubject
              navigation={navigation}
              subject={el}
              key={el.title}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    margin: 0,
    padding: 0,
    paddingTop: '12%',
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    fontSize: '35',
    marginBottom: '5%',
    marginTop: '10%',
    fontFamily: 'MontserratBold',
    color: '#353739',
  },
  text: {
    fontSize: '20',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: '5%',
    fontFamily: 'MontserratMedium',
    color: '#353739',
  },
  scroll: {
    width: '100%',
  },
  innerContainer: {
    display: 'flex',
    width: '100%',
  },
});
