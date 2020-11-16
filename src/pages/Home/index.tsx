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

  function handleNavigateToGame(AIEnable: boolean) {
    navigation.navigate('ChooseNickname', { AIEnable });
  }

  return (
    <Container>
      <Logo
        source={logoImg}
        resizeMode="contain"
      />
      <Title>Choose your game mode</Title>
      <ButtonContainer>
        <Button
          onPress={() => handleNavigateToGame(true)}
          backgroundColor="#3879F9"
          textColor="#FFF"
        >
          With AI
        </Button>
        <Button
          onPress={() => handleNavigateToGame(false)}
          backgroundColor="#3879F9"
          textColor="#FFF"
        >
          With a Friend
        </Button>
      </ButtonContainer>
      <StatusBar />
    </Container>
  );
};

export default Home;
