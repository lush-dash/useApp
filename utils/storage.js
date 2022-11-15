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

export const setGoodAnswer = async (subid, goodAnswer) => {
  try {
    const idResult = String(`${subid.subjectId}${subid.id}`);
    console.log(idResult, 'idresult');
    await AsyncStorage.setItem(`${idResult}`, String(goodAnswer.goodAnswer));
    console.log('im work!!');
  } catch (error) {
    console.error(error);
  }
};

export const getGoodAnswer = async (index) => {
  try {
    const idResult = String(`${index.subjectId}${index.id}`);
    const result = await AsyncStorage.getItem(String(idResult));
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const removeAnswer = async (index) => {
  try {
    await AsyncStorage.removeItem(index);
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
export default storage;
