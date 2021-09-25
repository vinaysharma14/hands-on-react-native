import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const Home = () => (
  <View style={styles.container}>
    <TextInput style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    elevation: 5,
    color: 'black',
    borderRadius: 5,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});
