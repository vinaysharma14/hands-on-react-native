import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { Button } from '../../components';

export const Home = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const resetTask = useCallback(() => {
    setTask('');
  }, []);

  const textChangeHandler = useCallback(value => {
    setTask(value);
  }, []);

  const submitPressHandler = useCallback(() => {
    resetTask();
    setTasks([...tasks, task]);
  }, [task, tasks, resetTask]);

  return (
    <View style={styles.container}>
      <TextInput
        value={task}
        style={styles.input}
        placeholderTextColor={'grey'}
        onChangeText={textChangeHandler}
        placeholder={'Add your task here'}
      />

      <View style={styles.buttonContainer}>
        <Button
          isSecondary
          title="Reset"
          onPress={resetTask}
          style={[styles.flex1, styles.resetButton]}
        />

        <Button
          title="Submit"
          style={styles.flex1}
          onPress={submitPressHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  flex1: {
    flex: 1,
  },
  resetButton: {
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
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
