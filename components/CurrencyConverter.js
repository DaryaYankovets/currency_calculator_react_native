import React, {useState} from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const CurrencyConverter = ({firstValue, chooseValue}) => {   
    const [usd, setUSD] = useState(1); 
    const [eur, setEUR] = useState(1); 

    const handleChangeUSD = (usdSum) => {
        setUSD(usdSum);
        setEUR((Number(usdSum)*2).toString());
    }

    const handleChangeEUR = (eurSum) => {
        setEUR(eurSum);
        setUSD((Number(eurSum)/2).toString())
    }

    return (
        <View>
            <Text style={styles.text}>USD</Text>
            <TextInput 
                value={usd}
                onChangeText={handleChangeUSD}
                style={styles.input}/>
            
            <Text style={styles.text}>EUR</Text>
            <TextInput 
                value={eur}
                onChangeText={handleChangeEUR}
                style={styles.input}/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 17,
        padding: 15,
        fontSize: 20,
        color: '#12A4D9',
        fontWeight: 'bold',
    },

    input: {
        paddingLeft: 15,
        marginHorizontal: 20,
        borderBottomWidth: 2,
        borderColor: '#E2D810',
        fontSize: 18,
    },
});

export default CurrencyConverter;