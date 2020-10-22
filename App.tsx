import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

import logoImg from './src/images/Logo.png';

export default function App() {
   const [fontsLoaded] = useFonts({
      Roboto_500Medium, 
      Roboto_400Regular
   });

   if(!fontsLoaded) {
      return null;
   }

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:' 100%'
  },

  title: {
     fontWeight: '500',
     color: '#3E5A82',
     fontFamily: 'Roboto_500Medium',
     fontSize: 20,
  },

  logo: {
   width: '90%',
   minHeight: 200,
   marginBottom: 60,
  },

  button: {
     backgroundColor: '#3879F9',
     width: '150px',
     height: '50px',
     color: '#FFF',
     paddingVertical: 5,
     paddingHorizontal: 10,
     borderRadius: 70,
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: '10px',
     fontFamily: 'Roboto_400Regular',
     fontSize: 15,
     shadowOffset:{  width: 0,  height: 5,  },
     shadowColor: 'black',
     shadowOpacity: 0.3,
     shadowRadius: 5,
  },

  buttonContainer: {
     marginTop: 40,
  }
});
