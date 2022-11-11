import React from 'react';
import {
  View, Dimensions, StyleSheet,
} from 'react-native';
import {
  PieChart,
} from 'react-native-chart-kit';
import { Text } from '@ui-kitten/components';
// получить из пропсов или редакса резалт и использовать его
const result = { goodAnswer: 50, badAnswer: 50 };

export default function ResultsPage() {
  const screenWidth = Dimensions.get('window').width;

  const data = [
    {
      name: '- 👍',
      population: result.goodAnswer,
      color: 'rgba(0, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 24,
    },
    {
      name: '- 👎',
      population: result.badAnswer,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 24,
    },
  ];
  return (
    <>
      <View>
        <Text style={styles.myText} category="h2">Результат</Text>
      </View>
      <View>
        <PieChart
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="0"
          center={[0, -20]}
          absolute
        />
      </View>
    </>

  );
}

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 2) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    textAlign: 'center',
    fontSize: '36',
    margin: '5%',
    marginBottom: '30%',
  },
});
