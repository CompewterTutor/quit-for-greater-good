import React from 'react';
import { View, Text, Button } from 'react-native';
//import {  } from 'nativewind';

const WelcomeScreen = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Welcome!</Text>
      <Text className="text-lg mb-8">We're glad to have you here. Let's get started on your journey to kick some bad habits.</Text>
      <Button title="Get Started" onPress={onGetStarted} />
    </View>
  );
};

export default WelcomeScreen;
