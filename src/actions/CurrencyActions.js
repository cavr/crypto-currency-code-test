import {
    SET_CURRENCIES
} from './types';
import {
    fetchCurrencies
} from './services/CurrencyService';

export const getCurrencies = () => {
    return (dispatch) => {
        fetchCurrencies((currency) =>
            dispatch({
                type: SET_CURRENCIES,
                payload: currency
            })
        )
    }
};