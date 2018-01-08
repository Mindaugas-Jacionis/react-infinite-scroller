import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import main from './main/reducer';

const config = {
  key: 'root',
  storage,
  whitelist: ['main'],
};

export default persistCombineReducers(config, { main });
