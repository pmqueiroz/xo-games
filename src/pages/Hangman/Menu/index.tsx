import React from 'react';
import { useNavigation } from '@react-navigation/native';

import LogoImg from '../../../images/hangman-logo.png';
import {
  Container, Screen, ButtonsContainer, Logo, Title,
} from './styles';
import Button from '../../../Components/Button';

const HMMenu: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToHangmanGame() {
    // cleiton
  }
  function handleIDunnoWTFThisShitGonnaDo() {
    // cleiton
  }
  function handleNavigateToHomePage() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Screen>
        <Logo source={LogoImg} />
        <Title>Welcome to hangman, play or edit collections to play</Title>
        <ButtonsContainer>
          <Button
            onPress={handleNavigateToHangmanGame}
            backgroundColor="#3879F9"
            textColor="#FFF"
          >
            Play
          </Button>
          <Button
            onPress={handleIDunnoWTFThisShitGonnaDo}
            backgroundColor="#3879F9"
            textColor="#FFF"
          >
            Collections
          </Button>
          <Button
            onPress={handleNavigateToHomePage}
            backgroundColor="#FFF"
            textColor="#000"
          >
            Home
          </Button>
        </ButtonsContainer>
      </Screen>
    </Container>
  );
};

export default HMMenu;
