import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { Route } from 'react-native';
import XPlayer from '../../images/X.png';
import OPlayer from '../../images/O.png';

import Button from '../../Components/Button';
import {
  Container, Title, ControlImg, PlayerNameInput,
} from './styles';

const ChooseNickname: React.FC = ({ route }: Route) => {
  const [playerXName, setPlayerXName] = useState('Player X');
  const [playerOName, setPlayerOName] = useState('Player O');
  const navigation = useNavigation();
  const { AIEnable } = route.params;

  function handleContinueToGame(difficulty: number) {
    //   0 = off
    //   1 = easy
    //   2 = medium
    //   3 = hard
    navigation.navigate('TicTacToe', { difficulty, playerXName, playerOName });
  }

  function AIDifficultSelection() {
    return (
      <>
        <Title>Select the difficulty</Title>
        <Button
          onPress={() => handleContinueToGame(1)}
          backgroundColor="#3879F9"
          textColor="#FFF"
        >
          Easy
        </Button>
        <Button
          onPress={() => handleContinueToGame(2)}
          backgroundColor="#3879F9"
          textColor="#FFF"
        >
          Medium
        </Button>
        <Button
          onPress={() => handleContinueToGame(3)}
          backgroundColor="#3879F9"
          textColor="#FFF"
        >
          Hard
        </Button>
      </>
    );
  }

  return (
    <Container>
      <Title>
        Choose your nickname
        {!AIEnable ? 's' : null}
      </Title>
      <ControlImg source={XPlayer} />
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={['#3575F8', '#80D9DA']}
        style={{
          marginVertical: 15,
          width: '75%',
          height: 45,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PlayerNameInput
          placeholder="Player 1"
          onChangeText={(text: string) => setPlayerXName(text)}
          maxLength={10}
        />
      </LinearGradient>

      {AIEnable
        ? <AIDifficultSelection />
        : (
          <>
            <ControlImg source={OPlayer} />
            <LinearGradient
              start={[0, 0.5]}
              end={[1, 0.5]}
              colors={['#F77634', '#F1D06E']}
              style={{
                marginVertical: 15,
                width: '75%',
                height: 45,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PlayerNameInput
                placeholder="Player 2"
                onChangeText={(text: string) => setPlayerOName(text)}
                maxLength={10}
              />
            </LinearGradient>

            <Button
              onPress={() => handleContinueToGame(0)}
              backgroundColor="#FFF"
              textColor="#000"
            >
              Continue
            </Button>
          </>
        )}
    </Container>
  );
};

export default ChooseNickname;
