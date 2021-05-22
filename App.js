import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonsStartPage } from './pages/startPage/buttonsStartPage';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonsStartPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF9F1'
  },
  text: {
    color: '#000'

  }
});
