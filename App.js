import React from 'react';
import { View, StyleSheet } from 'react-native';
import OvosDePascoa from './src/Cafes/cafe'; 

const App = () => {
  return (
    <View style={styles.container}>
      {}
      <OvosDePascoa />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
});

export default App;
