import React from 'react';
import Navigation from './src/navigation/Navigation'; // Ensure this path matches your folder structure
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Navigation component handles the screen switching */}
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the app takes the full screen
    backgroundColor: '#fff',
  },
});
