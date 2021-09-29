import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TaskItem = ({ item }) => {
  useEffect(() => {
    // commented out to avoid clutter in terminal
    // console.log(item.value);
  }, [item.value]);

  return (
    <View style={styles.taskItem}>
      <Text>{item.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 20,
    elevation: 5,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: 'white',
  },
});
