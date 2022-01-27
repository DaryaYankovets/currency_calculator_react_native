import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from "react-native";

const CurrencyItem = ({id, nameCurrency, sum, onChangeValue, idCurrencySelected, onSetCurrencySelected}) => {
    console.log(typeof sum, sum);
    
    const [changedCurrency, setChangedCurrency] = useState({id: null, nameCurrency: '', sum: ''});
    let curSum = 0;
    
    (id === idCurrencySelected) ? curSum = Math.trunc(Number(sum)).toString() : curSum = sum;
    
    const handleChangeValue = (event) => setChangedCurrency({id: id, nameCurrency: nameCurrency, sum: event.nativeEvent.text});
    
    const handleOnFocus = () => onSetCurrencySelected(id);

    useEffect(() => {
        onChangeValue(changedCurrency);
    }, [changedCurrency]);

    return (
        <View style={styles.fbox}>
            <View style={{ flex: 1, justifyContent: "center"}}>
                <Text style={styles.text}>{nameCurrency}</Text>
            </View>
            <View style={{ flex: 3, justifyContent: "center"}}>
                <TextInput 
                    defaultValue={curSum}
                    value={changedCurrency}
                    onChange={handleChangeValue}
                    keyboardType='number-pad'
                    style={styles.input} 
                    clearTextOnFocus={true}
                    clearButtonMode={true}
                    onFocus={handleOnFocus}/>
            </View>
        </View>
    );
};
  
const styles = StyleSheet.create({
    fbox: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
    },
    
    text: {
        padding: 15,
        fontSize: 28,
        color: '#322E2F',//'#D9138A',//'#12A4D9',
        //fontWeight: 'bold',
    },

    input: {
        padding: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#322E2F',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default CurrencyItem;