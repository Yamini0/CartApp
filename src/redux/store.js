import {legacy_createStore as createStore} from 'redux';
import {ShoppingReducer, cartReducer} from './reducer';

const store = createStore(ShoppingReducer);

export default store;
