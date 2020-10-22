import React from 'react';
import { Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import styles from './styles'
import logoImg from '../../images/Logo.png';


export default function Home(){
   return (
      <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}></Image>
      <Text style={styles.title}>Select the game you wanna play</Text>
      <View style={styles.buttonContainer}>
         <RectButton onPress={() => {console.log('certo')} } style={styles.button}>
            <Text>Tic Tac Toe</Text>
         </RectButton>
         <RectButton onPress={() => {console.log('certo')} } style={styles.button}>
            <Text>Hangman</Text>
         </RectButton>
      </View>
      <StatusBar style="auto" />
    </View>
   )
}