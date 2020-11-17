import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import ChooseNickname from './pages/ChooseNickname';
import History from './pages/History';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="History" component={History} />
        <Screen name="Home" component={Home} />
        <Screen name="TicTacToe" component={TicTacToe} />
        <Screen name="ChooseNickname" component={ChooseNickname} />
        {/* <Screen name="HMMenu" component={HMMenu} />
        <Screen name="HMRanking" component={HMRanking} /> */}
      </Navigator>
    </NavigationContainer>
  );
}
