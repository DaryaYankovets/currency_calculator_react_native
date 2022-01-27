import axios from "axios";

export default class CurrencyService {
    static async getAllCurrencyToday() {
        const response = await axios.get('https://api.currencyfreaks.com/latest?apikey=b06cb7a6b51f4e599589719b4ef2faf6');
        return response;     
    }

    static async getUsdEurBynRubToday() {
        const response = await axios.get('https://api.currencyfreaks.com/latest?apikey=b06cb7a6b51f4e599589719b4ef2faf6&symbols=USD,EUR,BYN,RUB');
        return response;        
    }

} 