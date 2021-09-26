import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

export const Home = () => {
  const [task, setTask] = useState('');

  const resetTask = useCallback(() => {
    setTask('');
  }, []);

  const textChangeHandler = useCallback(value => {
    setTask(value);
  }, []);

  const submitPressHandler = useCallback(() => {
    resetTask();
    console.log('task captured', task);
  }, [task, resetTask]);

  return (
    <View style={styles.container}>
      <TextInput
        value={task}
        style={styles.input}
        onChangeText={textChangeHandler}
      />

      <Pressable
        onPress={submitPressHandler}
        style={({ pressed }) => [
          styles.button,
          ...(pressed ? [styles.buttonPressed] : []),
        ]}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>

      <Pressable
        onPress={resetTask}
        style={({ pressed }) => [
          styles.button,
          ...(pressed ? [styles.buttonPressed] : []),
        ]}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
};

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
