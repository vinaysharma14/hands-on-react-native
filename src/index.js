import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Home } from './screens';

const App = () => (
  <View style={styles.container}>
    <Home />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
