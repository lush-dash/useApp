import React from 'react';
import {
  View, StyleSheet, ScrollView, Image, Linking,
} from 'react-native';
import { Text } from '@ui-kitten/components';

export default function AboutPage() {
  return (
    <ScrollView>
      <View>
        <Text style={styles.myH2} category="h2">О Приложении</Text>
        <Image
          source={require('../../../assets/paper-plane.png')}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.aboutPageText} category="p1">
          Добро пожаловать на страничку о приложении USEApp - unified state exam app, приложение для подготовки к единому государственному экзамену. С помощью нашего приложения вы сможете готовиться везде, где вам будет удобно. Пользуйтесь нашим приложением, сдавайте экзамены, получайте пятерки и поступайте в ЗДЕСЬ МОГЛА БЫТЬ ВАШЕ РЕКЛАМА
        </Text>
        <View style={styles.contactTextContainer}>
          <Text style={styles.contactTextHeader}>Контакты:</Text>
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://t.me/georgiisem')}>🤔 Гоша</Text>
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://t.me/lushdash')}>🤪 Даша</Text>
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://t.me/EvgeniyCom')}>😴 Женя</Text>
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://t.me/klurself')}>🤠 Вадим</Text>
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myH2: {
    textAlign: 'center',
    fontSize: '36',
    margin: '5%',
    marginTop: '25%',
  },
  aboutPageText: {
    textAlign: 'justify',
    fontSize: '18',
    margin: '5%',
  },
  contactText: {
    fontSize: '16',
    color: 'blue',
    marginLeft: '5%',
    marginBottom: '1%',
  },
  contactTextHeader: {
    fontSize: '16',
    marginLeft: '5%',
    fontWeight: 'bold',
    marginBottom: '1%',
  },
  contactTextContainer: {
    marginTop: '10%',
  },
});
