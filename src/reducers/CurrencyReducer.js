import {
    SET_CURRENCIES
} from '../actions/types';

export default (state = null, action) => {

    switch (action.type) {
        case SET_CURRENCIES:
            return getCurrentCurrenciesWithColor(state, action.payload);
        default:
            return state;
    }
}

const getCurrentCurrenciesWithColor = (oldCurrency, newCurrency) => {

    const result = {};

    for (const symbol of Object.keys(newCurrency)) {

        if (!oldCurrency || !oldCurrency[symbol] || oldCurrency[symbol].price_usd === newCurrency[symbol].price_usd) {
            result[symbol] = { ...newCurrency[symbol],
                color: 'white'
            };
        } else if (oldCurrency[symbol].price_usd > newCurrency[symbol].price_usd) {
            result[symbol] = { ...newCurrency[symbol],
                color: 'red'
            };
        } else {
            result[symbol] = { ...newCurrency[symbol],
                color: 'green'
            };
        }
    }

    return result;
};