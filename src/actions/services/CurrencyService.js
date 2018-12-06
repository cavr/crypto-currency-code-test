const api = 'https://api.coinmarketcap.com/v1/ticker/';
const currencies = ['BTC', 'ETH', 'LTC'];


export const fetchCurrencies = (callback) => {
    fetch(api)
        .then(response =>
            response.json())
        .then(currencyJSON => {
            const currencyMap = {};
            currencyJSON.forEach(currency => {
                currencies.indexOf(currency.symbol) >= 0 &&
                    (currencyMap[currency.symbol] = {
                        price_usd: parseFloat(currency.price_usd),
                        name: currency.name,
                        symbol: currency.symbol
                    })
            });
            callback(currencyMap);
        })
}