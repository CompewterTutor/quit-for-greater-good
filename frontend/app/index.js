import React from 'react';
import { Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, World from React Native!</Text>
    </View>
  );
};

registerRootComponent(App);
