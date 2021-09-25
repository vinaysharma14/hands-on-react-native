import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

export const Home = () => (
  <View style={styles.container}>
    <TextInput style={styles.input} />

    <Pressable
      style={({ pressed }) => [
        styles.button,
        ...(pressed ? [styles.buttonPressed] : []),
      ]}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </Pressable>
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
  button: {
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
