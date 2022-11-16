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
    const prev = await AsyncStorage.getItem('allAnswerKey');
    if ((prev !== null) && prev) {
      await AsyncStorage.removeItem('allAnswerKey');
      const splitprev = prev?.split(',');
      const result = `${Number(splitprev[0]) + Number(goodAnswer.goodAnswer)},${Number(splitprev[1]) + Number(goodAnswer.badAnswer)}`;
      await AsyncStorage.setItem('allAnswerKey', result);
    } else {
      await AsyncStorage.setItem('allAnswerKey', (`${goodAnswer.goodAnswer},${goodAnswer.badAnswer}`));
    }
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
    await AsyncStorage.removeItem((index));
  } catch (error) {
    console.error(error);
  }
};

export const removeThisAnswer = async (index) => {
  try {
    const idResult = (`${index.subjectId}${index.id}`);
    await AsyncStorage.removeItem((idResult));
    console.log(idResult, 'removeAnswerremoveAnswer');
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
    const result = await AsyncStorage.getItem((idResult));
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const setOneSubjAnswer = async (subid, goodAnswer) => {
  try {
    const idResult = (`${subid.subjectId}${subid.id}`);
    await AsyncStorage.setItem(`${idResult}`, (`${goodAnswer.goodAnswer},${goodAnswer.badAnswer}`));
  } catch (error) {
    console.error(error);
  }
};

export const getAllStats = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const allStats = await AsyncStorage.multiGet([...keys]);
    const result = allStats.filter((el) => Number(el[0]));
    const arr = result.map((el) => {
      const newArr = [...el];
      newArr[1] = newArr[1].split(',');
      return newArr;
    });
    const statObj = {};
    for (let i = 0; i < arr.length; i += 1) {
      const key = arr[i][0][0];
      if (key in statObj) {
        statObj[key][0] += Number(arr[i][1][0]);
        statObj[key][1] += Number(arr[i][1][1]);
        statObj[key][2] += 1;
      } else {
        statObj[key] = [];
        statObj[key].push(Number(arr[i][1][0]), Number(arr[i][1][1]), 1);
      }
    }

    // console.log(Object.entries(statObj));
    return Object.entries(statObj);
    // return statObj;
  } catch (error) {
    console.error(error);
  }
};

export default storage;
