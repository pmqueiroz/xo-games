import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import HMMenu from './pages/Hangman/Menu';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="TicTacToe" component={TicTacToe} />
        <Screen name="HMMenu" component={HMMenu} />
      </Navigator>
    </NavigationContainer>
  );
}
