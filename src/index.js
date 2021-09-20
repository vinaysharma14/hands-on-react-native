import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text>App</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
