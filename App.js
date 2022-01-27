import React, { useState, useEffect } from "react";
import { useFetching } from './components/hooks/useFetching';
import { View, StyleSheet, Text } from 'react-native';
import Header from './components/Header';
import CurrencyList from './components/CurrencyList';
import Footer from "./components/Footer";
import CurrencyService from "./API/CurrencyService";


export default function App() {
  const [currencyValuesAPI, setCurrencyValuesAPI] = useState({});
  const [currencyValues, setCurrencyValues] = useState([]);
  const [listSelectedCurrency, setListSelectedCurrency] = useState(['USD', 'EUR', 'BYN', 'RUB']);
  const [idCurrencySelected, setIdCurrencySelected] = useState(null);

  const [fetchCurrency, isCurrencyLoading, currencyError] = useFetching(async () => {
    const response = await CurrencyService.getAllCurrencyToday();

    const arrCurrency = [];
        Object.keys(response.data.rates).forEach((item, index) => {
          if(listSelectedCurrency.some(elem => elem === item)){
            console.log('!!!!', typeof response.data.rates[item]);
            arrCurrency.push({id: index , nameCurrency: item, sum: response.data.rates[item]});
          }
    });
    setCurrencyValues(arrCurrency);  
    setCurrencyValuesAPI(response.data);
    
  }); 


  useEffect(() => {
    console.log('useEffect');
    fetchCurrency();
  }, []);

  

  const onChangeCurrencyValues = (item) => {
    const newCurrencyValues = currencyValues.map(elem => {
      if (elem.nameCurrency !== item.nameCurrency) {
        const coef = Number(currencyValuesAPI.rates[elem.nameCurrency]) / Number(currencyValuesAPI.rates[item.nameCurrency]);
        return {id: elem.id, nameCurrency: elem.nameCurrency, sum: coef * item.sum};
      } else {
        return {id: elem.id, nameCurrency: elem.nameCurrency, sum: item.sum};
      }
    });
    setCurrencyValues(newCurrencyValues);
  };

  //console.log('currencyValuesAPI+++++++++', currencyValuesAPI);
  //console.log('currencyValues=======',currencyValues);

  return (
    <View style={styles.container}>
        <Header/> 
        {isCurrencyLoading 
        ? <Text>загрузка...</Text>
        : <CurrencyList 
            currencyValues={currencyValues}
            onChangeCurrencyValues={onChangeCurrencyValues}
            onSetCurrencySelected={(id) => setIdCurrencySelected(id)}
            idCurrencySelected={idCurrencySelected}/>}  
        {/* <Footer/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#12A4D9',//'#D9138A',
    height: '100%',
  }
});

