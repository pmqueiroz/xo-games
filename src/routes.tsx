import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';

export default function Routes() {
   return (
      <NavigationContainer>
         <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home}/>
            <Screen name="TicTacToe" component={TicTacToe}/>
         </Navigator>
      </NavigationContainer>
   )
}
