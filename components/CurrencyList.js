import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import CurrencyItem from "./CurrencyItem";

const CurrencyList = ({currencyValues, onChangeCurrencyValues, idCurrencySelected, onSetCurrencySelected}) => {   

    return (
        <View style={styles.container}>
            <ScrollView>
                {currencyValues.map(item => 
                                        <CurrencyItem
                                            key={item.nameCurrency}
                                            id={item.id}
                                            nameCurrency={item.nameCurrency} 
                                            sum={Number(item.sum).toFixed(3).toString()} 
                                            onChangeValue={(item) => onChangeCurrencyValues(item)}
                                            idCurrencySelected={idCurrencySelected}
                                            onSetCurrencySelected={onSetCurrencySelected}/>
                                        )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        top: 170,
        marginLeft: '5%',
        marginRight: '5%',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        width: '90%',
        height: '100%',
        borderRadius: 50,
    },

    text: {
        marginTop: 17,
        padding: 15,
        fontSize: 28,
        color: '#12A4D9',
        fontWeight: 'bold',
    },

    input: {
        padding: 5,
        marginHorizontal: 20,
        borderBottomWidth: 2,
        borderColor: '#E2D810',
        fontSize: 20,
        textAlign: 'center',
    },

    fbox: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 80,
    }
});

export default CurrencyList;