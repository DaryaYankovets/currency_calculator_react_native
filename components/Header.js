import React from "react";

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Конвертер валют</Text> 
    </View>
  );
};
  
const styles = StyleSheet.create({
  header: {
      paddingTop: 70,
      height: 130,
      backgroundColor: '#E2D810',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  }
});

export default Header;