import React from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@ui-kitten/components';
import {
  Dimensions,
  StyleSheet, View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import OneOption from '../OneOption/OneOption';

export default function OptionsPage({ navigation }) {
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
      margin: 0,
      padding: 0,
    }}
    >
      <ScrollView style={styles.scroll}>
        <View style={{
          flex: 1,
          backgroundColor: currSubject?.color,
          alignItems: 'center',
          justifyContent: 'start',
          width: '100%',
          paddingTop: '20%',
        }}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{currSubject?.title}</Text>
            <Text style={styles.text}>Выбери вариант</Text>
            {options && options.map((el) => (
              <OneOption
                navigation={navigation}
                option={el}
                key={el.title}
              />
            ))}
          </View>
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
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    paddingTop: '10%',
    borderTopLeftRadius: '30',
    borderTopRightRadius: '30',
    elevation: 1,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      height: -1,
      width: 1,
    },
    minHeight: (Dimensions.get('screen').height - 150),
    paddingBottom: '10%',
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: '5%',
    fontFamily: 'MontserratBold',
    fontSize: '35',
    color: '#353739',
  },
  text: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: '5%',
    fontSize: '20',
    fontFamily: 'MontserratMedium',
    color: '#353739',
  },
  scroll: {
    width: '100%',
  },
});
