import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
  size: 1000,

  storageBackend: AsyncStorage, // for web: window.localStorage

  defaultExpires: 1000 * 3600 * 24,

  enableCache: true,

});

export const StorageErrorTypes = {
  Expired: 'ExpiredError',
  NotFound: 'NotFoundError',
};

export const saveName = async (text) => {
  try {
    AsyncStorage.setItem('usernameData', text);
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line consistent-return
export const getName = async () => {
  try {
    const name = await AsyncStorage.getItem('usernameData');
    return name;
  } catch (error) {
    console.log(error);
  }
};

export const removeName = async () => {
  try {
    await AsyncStorage.removeItem('usernameData');
  } catch (error) {
    console.log(error);
  }
};

export const setGoodAnswer = async (goodAnswer) => {
  try {
    // const idResult = String(`${subid.subjectId}${subid.id}`);
    console.log(goodAnswer, 'idresult');
    await AsyncStorage.setItem('allAnswerKey', (`${goodAnswer.goodAnswer},${goodAnswer.badAnswer}`));
    console.log('im work!jjjjjjjj!', (`${goodAnswer.goodAnswer},${goodAnswer.badAnswer}`));
  } catch (error) {
    console.error(error);
  }
};

export const getGoodAnswer = async () => {
  try {
    const result = await AsyncStorage.getItem('allAnswerKey');
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const removeAnswer = async (index) => {
  try {
    await AsyncStorage.removeItem(toString(index));
  } catch (error) {
    console.error(error);
  }
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    console.error(error);
  }
};

export const getOneSubjAnswer = async (index) => {
  try {
    const idResult = (`${index.subjectId}${index.id}`);
    // console.log((idResult), 'idResultidResultidResultidResultidResult');
    const result = await AsyncStorage.getItem((idResult));
    console.log(idResult, '//////////////////', result, 'jsjsjsjsjjsjsjsjsjsjsjjs');
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const setOneSubjAnswer = async (subid, goodAnswer) => {
  try {
    const idResult = (`${subid.subjectId}${subid.id}`);
    console.log(idResult, 'idresult');
    await AsyncStorage.setItem(`${idResult}`, (`${goodAnswer.goodAnswer},${goodAnswer.badAnswer}`));
    console.log('im work!!', (`${goodAnswer.goodAnswer},${goodAnswer.badAnswer}`));
  } catch (error) {
    console.error(error);
  }
};

export default storage;
