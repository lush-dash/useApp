import React from 'react';
import {
  View, Dimensions, StyleSheet, Text, ActivityIndicator,
} from 'react-native';
import {
  PieChart,
} from 'react-native-chart-kit';
import { useFonts } from 'expo-font';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { setGoodAnswer, setOneSubjAnswer } from '../../../utils/storage';
import { deleteAnswer } from '../../redux/actions/answersCounterActions';

export default function ResultsPage({ navigation }) {
  const currSubject = useSelector((state) => state.currSubject);
  const result = useSelector((state) => state.answersCounter);
  const currentOption = useSelector((state) => state.currentOption);
  const timer = useSelector((state) => state.timer);
  const [fontsLoaded] = useFonts({
    MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
  });
  const screenWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const data = [
    {
      name: 'Верно',
      population: result.goodAnswer,
      color: 'rgba(167,236,174, .6)',
      legendFontColor: '#353739',
      legendFontSize: 18,
    },
    {
      name: 'Неверно',
      population: result.badAnswer,
      color: 'rgba(254,192,169, .6)',
      legendFontColor: '#353739',
      legendFontSize: 18,
    },
  ];

  if (!fontsLoaded || !currSubject || !result || !currentOption || !timer) {
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
      <ScrollView style={styles.scroll}>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>Результат</Text>
            <Text style={styles.text}>{`Время прохождения: ${new Date((timer.start - timer.end) * 1000).toISOString().slice(11, 19)}`}</Text>
            <Text style={styles.text}>{`Предмет: ${currSubject?.title}`}</Text>
            <Text style={styles.text}>{currentOption?.title}</Text>
          </View>
          <View style={styles.chartContainer}>
            <PieChart
              data={data}
              width={screenWidth}
              height={200}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="0"
              center={[0, -20]}
            />
          </View>
          <TouchableOpacity onPress={async () => {
            await setOneSubjAnswer(currentOption, result);
            await setGoodAnswer(result);
            dispatch(deleteAnswer());
            navigation.navigate('Subjects');
          }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>На главную</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  );
}

const chartConfig = {
  color: (opacity = 2) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'MontserratBold',
    fontSize: '35',
    color: '#353739',
    marginBottom: '10%',
  },
  text: {
    fontFamily: 'MontserratMedium',
    fontSize: '20',
    color: '#353739',
  },
  innerContainer: {
    flex: 1,
    marginTop: '20%',
    height: (Dimensions.get('screen').height - 200),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#353739',
    width: 200,
    height: 36,
    borderRadius: '30',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
