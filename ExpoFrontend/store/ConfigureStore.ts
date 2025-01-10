import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { documentDirectory, EncodingType } from "expo-file-system";
import { createExpoFileSystemStorage } from "redux-persist-expo-file-system-storage";
import { persistReducer } from "redux-persist";
import CounterReducer from "./counter/counter";

export const expoFileSystemStorage = createExpoFileSystemStorage({
  storagePath: `${documentDirectory}customPathName/`,
  encoding: EncodingType.UTF8,
  debug: true,
});

const persist = (key: string, reducer: Reducer): Reducer =>
  persistReducer(
    {
      key,
      storage: expoFileSystemStorage,
    },
    reducer
  );

const combinePersistReducers = (keys: { [key: string]: Reducer }): { [key: string]: Reducer } =>
  Object.keys(keys).reduce(
    (obj, key) => ({
      ...obj,
      [key]: persist(key, keys[key]),
    }),
    {}
  );

const reducers = combineReducers({
  ...combinePersistReducers({
    count: CounterReducer,
  }),
});

export default reducers;