import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@ui-kitten/components';
import { Switch } from 'react-native-paper';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet, View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import OneOption from '../OneOption/OneOption';

export default function OptionsPage({ navigation }) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const currSubject = useSelector((state) => state.currSubject);
  const options = useSelector((state) => state.options);
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded || !options.length) {
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

  // добавить логику в map
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
            <View style={styles.switchContainer}>
              <Switch
                color={currSubject?.darkColor}
                style={styles.switch}
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
              <Text style={styles.switchText}>Только новые варианты</Text>
            </View>
            {options && options.map((el) => (
              <OneOption
                navigation={navigation}
                option={el}
                key={el.title}
                isSwitchOn={isSwitchOn}
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
  switchContainer: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
  },
  switchText: {
    fontFamily: 'MontserratMedium',
    marginLeft: '3%',
  },
  scroll: {
    width: '100%',
  },
  toggle: {
    borderColor: 'red',
  },
});
