import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import P1ControlImg from '../../../images/p1-control.png';
import P2ControlImg from '../../../images/p2-control.png';

import Button from '../../../Components/Button';
import {
  Container, Title, ControlImg, PlayerNameInput,
} from './styles';

const HMChooseNickname: React.FC = () => {
  function handleContinueToHangmanGame() {
    // certo
  }
  return (
    <Container>
      <Title>Choose your nicknames</Title>
      <ControlImg source={P1ControlImg} />
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
      // onChangeText={(text: string) => setPlayerXName(text)}
          maxLength={10}
        />
      </LinearGradient>

      <ControlImg source={P2ControlImg} />
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
      // onChangeText={(text: string) => setPlayerXName(text)}
          maxLength={10}
        />
      </LinearGradient>

      <Button
        onPress={handleContinueToHangmanGame}
        backgroundColor="#FFF"
        textColor="#000"
      >
        Continue
      </Button>
    </Container>
  );
};

export default HMChooseNickname;
