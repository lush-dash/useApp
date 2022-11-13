import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
  size: 1000,

  storageBackend: AsyncStorage, // for web: window.localStorage

  defaultExpires: 1000 * 3600 * 24,

  enableCache: true,

});

export const setUserName = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log(jsonValue, 'setUserJsonValue');
    await AsyncStorage.setItem('@userName', jsonValue);
  } catch (err) {
    console.error(err);
  }
};

// export const getUserName = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@userName');
//     console.log(jsonValue, 'jsonvalueGEtUSer');
//     return jsonValue;
//   } catch (err) {
//     console.error(err);
//   }
//   console.log('im good');
// };

// export const setUserName = (value) => storage.save({
//   key: 'userName',
//   data: value,
// });

export const getUserName = () => storage.load({
  key: 'userName',

}).then((ret) => console.log(ret));

// export const getAllKeys = async () => {
//   let keys = [];
//   try {
//     keys = await AsyncStorage.getAllKeys();
//   } catch (e) {
//     // read key error
//   }

//   console.log(keys);
//   // example console.log result:
//   // ['@MyApp_user', '@MyApp_key']
// };

export default storage;
