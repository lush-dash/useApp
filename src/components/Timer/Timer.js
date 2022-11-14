import React from 'react';
import { Text } from '@ui-kitten/components';
import {
  StyleSheet, View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { useDispatch } from 'react-redux';
import { setEnd, setStart } from '../../redux/actions/timerActions';

export default function Timer({ navigation, timerValue, stopTimer }) {
  const [time, setTime] = React.useState(timerValue);
  const timerRef = React.useRef(time);
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('../../../assets/fonts/Montserrat-SemiBold.ttf'),
  });

  React.useEffect(() => {
    dispatch(setStart(timerValue));
    dispatch(setEnd(time));
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
        navigation.navigate('Result');
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    if (stopTimer) {
      return () => {
        clearInterval(timerId);
      };
    }
    return () => {
      clearInterval(timerId);
    };
  }, [stopTimer]);

  if (!fontsLoaded) return null;

  return (

    <View style={styles.container}>
      <Text style={styles.text}>
        {`Таймер: ${new Date(time * 1000).toISOString().slice(11, 19)}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: 'flex-end',
    marginTop: '5%',
    marginRight: '5%',
    alignItems: 'center',
    height: 33,
    minWidth: '50%',
    justifyContent: 'center',
  },
  text: {
    fontSize: '15',
    color: '#353739',
    fontFamily: 'MontserratMedium',
  },

});
