import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Footer = () => {
 
  return (
    <View style={styles.footer}>
        <TouchableHighlight style={styles.bottomButtons}>
            <Text
                style={styles.footerText}>
                    Добавить валюту
            </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.bottomButtons}>
            <Text style={styles.footerText}>Изменить дату</Text>
        </TouchableHighlight>
    </View>
  );
};
  
const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        zIndex: 20,
        flex:0.1,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:'#E2D810',
        flexDirection:'row',
        height: 60,
    },
    bottomButtons: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1,
    },
    footerText: {
        marginLeft: 10,
        marginLeft: 10,
        color:'#FFFFFF',
        fontSize:15,
    },
});

export default Footer;