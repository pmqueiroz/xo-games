import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  Title,
  ButtonContainer,
} from './styles';

import Button from '../../Components/Button';

import logoImg from '../../images/Logo.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToTicTacToe() {
    navigation.navigate('TicTacToe');
  }

  function handleNavigateToHangmanGame() {
    navigation.navigate('HMMenu');
  }

  return (
    <Container>
      <Logo
        source={logoImg}
        resizeMode="contain"
      />
      <Title>Select the game you wanna play</Title>
      <ButtonContainer>
        <Button
          onPress={handleNavigateToTicTacToe}
          backgroundColor="#3879F9"
          textColor="#FFF"
        >
          Tic Tac Toe
        </Button>
        <Button
          onPress={handleNavigateToHangmanGame}
          backgroundColor="#3879F9"
          textColor="#FFF"
        >
          Hangman
        </Button>
      </ButtonContainer>
      <StatusBar />
    </Container>
  );
};

export default Home;
