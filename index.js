import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_SWqYqS0pupzXT7cPo5PRjkXIIVmV87gU38HQ0GIN');

convertCurrency("USD","INR",2);

export async function convertCurrency(fromCurrency,toCurrency,units){
    const result = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,
    })
    const multiplier = result.data[toCurrency];
    return multiplier*units;
}

