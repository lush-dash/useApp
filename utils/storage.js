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

// export const setData = async (value) => {
//   try {
//     await AsyncStorage.setItem('someData', value);
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem(value);
//   } catch (err) {
//     console.error(err);
//   }
// };

export const setData = (value) => storage.save({
  key: 'someData',
  data: value,
});

export const getData = () => storage.load({
  key: 'someData',
});

export default storage;
