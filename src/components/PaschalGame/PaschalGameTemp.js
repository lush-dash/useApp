import React from 'react';
import {
  View, StyleSheet, Dimensions,
} from 'react-native';

export default function PaschalGame() {
  return (
    <View style={styles.container}>
      123
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: (Dimensions.get('screen').width),
    height: '70%',
  },
  userName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '25',
    fontFamily: 'MontserratMedium',
    color: '#353739',
  },
  button: {
    backgroundColor: '#353739',
    width: 200,
    borderRadius: '30',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  input: {
    borderRadius: '30',
    borderWidth: 1,
    borderColor: '#353739',
    marginBottom: '5%',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});
