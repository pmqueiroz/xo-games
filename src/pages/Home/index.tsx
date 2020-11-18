import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  Title,
  ButtonContainer,
  HistoryBtn,
  HistoryIcon,
} from './styles';

import Button from '../../Components/Button';

import logoImg from '../../images/Logo.png';
import historyImg from '../../images/history.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToGame(AIEnable: boolean) {
    navigation.navigate('ChooseNickname', { AIEnable });
  }

  function handleNavigateToHistory() {
    navigation.navigate('History');
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
        <HistoryBtn onPress={handleNavigateToHistory}>
          <HistoryIcon source={historyImg} resizeMode="contain" />
        </HistoryBtn>
      </ButtonContainer>
      <StatusBar />
    </Container>
  );
};

export default Home;
