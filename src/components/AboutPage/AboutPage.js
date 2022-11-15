import { useFonts } from 'expo-font';
import React from 'react';
import {
  View, StyleSheet, ScrollView, Linking, Text, Dimensions, ActivityIndicator,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AboutPage() {
  const [fontsLoaded] = useFonts({
    MontserratMedium: require('../../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
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
      <ScrollView>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.myH2}>О приложении</Text>
            <Text style={styles.aboutPageTextMain}>
              USEApp (Unified State Exam App) - это приложение для подготовки к заданиям тестовой части Единого Государственного Экзамена.
            </Text>
          </View>
          <View>
            <Text style={styles.contactTextHeader}>Как это работает?</Text>
            <View style={styles.listItem}>
              <MaterialCommunityIcons name="numeric-1-circle-outline" color="#353739" size="30" />
              <Text style={styles.aboutPageText}>
                Выбери интересующий предмет.
              </Text>
            </View>
            <View style={styles.listItem}>
              <MaterialCommunityIcons name="numeric-2-circle-outline" color="#353739" size="30" />
              <Text style={styles.aboutPageText}>
                Занимайся в любом месте и в удобном формате.
              </Text>
            </View>
            <View style={styles.listItem}>
              <MaterialCommunityIcons name="numeric-3-circle-outline" color="#353739" size="30" />
              <Text style={styles.aboutPageText}>
                Получай информацию о своих результатах.
                {/* и отслеживай прогресс в личном кабинете. */}
              </Text>
            </View>
          </View>
          <View style={styles.contactTextContainer}>
            <Text style={styles.contactTextHeader}>Наши контакты:</Text>
            <View style={styles.contactsContainer}>
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => Linking.openURL('https://t.me/georgiisem')}>
                <View style={styles.nameBubble1}>
                  <Text style={styles.name}>Гоша</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => Linking.openURL('https://t.me/lushdash')}>
                <View style={styles.nameBubble2}>
                  <Text style={styles.name}>Даша</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => Linking.openURL('https://t.me/EvgeniyCom')}>
                <View style={styles.nameBubble3}>
                  <Text style={styles.name}>Женя</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => Linking.openURL('https://t.me/klurself')}>
                <View style={styles.nameBubble4}>
                  <Text style={styles.name}>Вадим</Text>
                </View>
              </TouchableOpacity>
            </View>
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
    paddingTop: '12%',
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'start',
    height: (Dimensions.get('screen').height - 150),
    justifyContent: 'space-between',
  },
  myH2: {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    fontSize: '36',
    fontFamily: 'MontserratBold',
    color: '#353739',
  },
  aboutPageTextMain: {
    margin: '5%',
    fontSize: '18',
    fontFamily: 'MontserratMedium',
    color: '#353739',
    overflowWrap: 'break-word',
  },
  aboutPageText: {
    fontSize: '18',
    fontFamily: 'MontserratMedium',
    color: '#353739',
    overflowWrap: 'break-word',
    width: '85%',
    marginLeft: '5%',
  },
  listItem: {
    marginLeft: '5%',
    marginBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contactTextHeader: {
    marginLeft: '5%',
    marginBottom: '5%',
    fontSize: '18',
    fontWeight: 'bold',
    fontFamily: 'MontserratBold',
  },
  contactTextContainer: {
    marginTop: '5%',
  },
  contactsContainer: {
    marginLeft: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    width: '90%',
  },
  touchableOpacity: {
    height: '100%',
    width: 80,
  },
  nameBubble1: {
    backgroundColor: '#ffe3c8',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBubble2: {
    backgroundColor: '#b0d0f5',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBubble3: {
    backgroundColor: '#c1e6ee',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBubble4: {
    backgroundColor: '#e3e3fe',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'MontserratMedium',
    fontSize: '18',
    color: '#353739',
  },
});
