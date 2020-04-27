import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';


export default function App() {
  return (
    <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
   // <View style={styles.container}>
   //   <Text>Open up App.js to start kworking on your app!</Text>
   // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
