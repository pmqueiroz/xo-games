import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  Title,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';
import logoImg from '../../images/Logo.png';

export default function Home() {
  const navigation = useNavigation();

  function handleNavigateToTicTacToe() {
    navigation.navigate('TicTacToe');
  }

  function handleNavigateToHangmanGame() {
    // navigation.navigate('HangmanGame');
  }

  return (
    <Container>
      <Logo
        source={logoImg}
        resizeMode="contain"
      />
      <Title>Select the game you wanna play</Title>
      <ButtonContainer>
        <Button onPress={handleNavigateToTicTacToe}>
          <ButtonText>Tic Tac Toe</ButtonText>
        </Button>
        <Button onPress={handleNavigateToHangmanGame}>
          <ButtonText>Hangman</ButtonText>
        </Button>
      </ButtonContainer>
      <StatusBar />
    </Container>
  );
}
