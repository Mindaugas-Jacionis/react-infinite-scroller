import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import main from './main/reducer';

const config = {
  key: 'root',
  storage,
  whitelist: [],
};

export default persistCombineReducers(config, { main });
