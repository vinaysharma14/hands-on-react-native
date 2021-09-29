import React, { useState, useCallback } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';

import { TaskItem } from './components';
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

    if (task !== '') {
      setTasks([
        ...tasks,
        {
          value: task,
          id: new Date().getTime(),
        },
      ]);
    }
  }, [task, tasks, resetTask]);

  const keyExtractorHandler = useCallback(({ id }) => id, []);

  const renderItemHandler = useCallback(
    ({ item }) => <TaskItem item={item} />,
    [],
  );

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

      <FlatList
        data={tasks}
        style={styles.listContainer}
        renderItem={renderItemHandler}
        keyExtractor={keyExtractorHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  flex1: {
    flex: 1,
  },
  resetButton: {
    marginRight: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  input: {
    elevation: 5,
    color: 'black',
    borderRadius: 5,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  listContainer: {
    paddingHorizontal: 20,
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
