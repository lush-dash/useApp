import React from 'react';
import {
  Dimensions, View, StyleSheet, Text,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';

export default function StatsBySubject({ oneStat }) {
  const topics = useSelector((store) => store.topics);

  let topicName;
  if (topics.length) {
    for (let i = 0; i < topics.length; i += 1) {
      if (Number(oneStat[0]) === topics[i].id) {
        topicName = topics[i].title;
      }
    }
  }

  const screenWidth = Dimensions.get('window').width;
  const data = [
    {
      name: 'Верно',
      population: oneStat[1][0],
      color: 'rgba(167,236,174, .6)',
      legendFontColor: '#353739',
      legendFontSize: 18,
    },
    {
      name: 'Неверно',
      population: oneStat[1][1],
      color: 'rgba(254,192,169, .6)',
      legendFontColor: '#353739',
      legendFontSize: 18,
    },
  ];

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.text}>{`${topicName}\n`}</Text>
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
  );
}

const chartConfig = {
  color: (opacity = 2) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 3,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const styles = StyleSheet.create({
  chartContainer: {
    marginTop: '5%',
  },
  text: {
    textAlign: 'center',
    fontSize: '20',
    fontFamily: 'MontserratMedium',
    color: '#353739',
  },
});
