
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export const ButtonsStartPage= props=> {
  return (
    <View style={styles.container}>
        <Button title='Вход' />
        <Button title='Регистрация' />
    </View>
  );
}

const styles = StyleSheet.create({
 block: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  text: {
    color: '#000',
  },
  button: {
    width: '50%',
    paddingHorizontal: '10',
    backgroundColor: '#9BAEA0'
  }
});
