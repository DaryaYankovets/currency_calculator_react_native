import React from "react";

import { StyleSheet, Text, View } from 'react-native';

/* import * as Font from 'expo-font';

const fonts = Font.loadAsync ({
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
}); */

const Header = () => {
  const now = new Date();
  const month = now.getMonth().toString().length === 1 ? '0' + (now.getMonth()+1)  : date.getMonth();
  
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Конвертер валют</Text> 
      <Text style={styles.subtitle}>на {now.getDate()}.{month}.{now.getFullYear()}</Text>  
    </View>
  );
};
  
const styles = StyleSheet.create({
  header: {
      paddingTop: 70,
      height: 350,
      width: '100%',
      backgroundColor: '#E2D810',
      borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },

  subtitle: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Header;