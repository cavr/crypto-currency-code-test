import { combineReducers } from 'redux';
import CurrencyReducer from './CurrencyReducer'

export default combineReducers({
    currency: CurrencyReducer
});