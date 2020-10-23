import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import logoImg from '../../images/Logo.png';


export default function Home(){

   const navigation = useNavigation();

   function handleNavigateToTicTacToe() {
      navigation.navigate('TicTacToe')      
   }

   return (
      <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}></Image>
      <Text style={styles.title}>Select the game you wanna play</Text>
      <View style={styles.buttonContainer}>
         <TouchableOpacity onPress={handleNavigateToTicTacToe} style={styles.button}>
            <Text style={styles.buttonText}>Tic Tac Toe</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {console.log('certo')} } style={styles.button}>
            <Text style={styles.buttonText}>Hangman</Text>
         </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
   )
}