import React, { useState } from "react";
import { View } from 'react-native';
import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';

export default function App() {
  const [firstValue, setFirstValue] = useState("USD");
  const [secondValue, setSecondValue] = useState("EUR");

  const chooseValue = (value) => setFirstValue(value);

  return (
    <View>
        <Header/> 
        <CurrencyConverter firstValue={firstValue} chooseValue={chooseValue}/>
    </View>
  );
}

