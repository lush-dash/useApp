import React from 'react';
import { Text } from '@ui-kitten/components';
import {
  StyleSheet, View,
} from 'react-native';

export default function Timer({ navigation, timerValue }) {
  const [time, setTime] = React.useState(timerValue || 20);
  const timerRef = React.useRef(time);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
        navigation.navigate('Result');
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (

    <View style={styles.container}>
      <Text style={styles.text}>
        Осталось:
        {' '}
        {time}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: '55%',
    marginTop: '10%',
    marginRight: '5%',
    alignItems: 'center',
  },
  text: {
    padding: '5%',
    fontSize: '16',
    fontWeight: 'bold',
    color: '#353739',
  },

});
