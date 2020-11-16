import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import XPlayer from '../../images/X.png';
import OPlayer from '../../images/O.png';

import Button from '../../Components/Button';
import {
  Container, Title, ControlImg, PlayerNameInput,
} from './styles';

const ChooseNickname: React.FC = () => {
  const navigation = useNavigation();

  function handleContinueToGame() {
    navigation.navigate('TicTacToe');
  }
  return (
    <Container>
      <Title>Choose your nicknames</Title>
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
      // onChangeText={(text: string) => setPlayerXName(text)}
          maxLength={10}
        />
      </LinearGradient>

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
      // onChangeText={(text: string) => setPlayerXName(text)}
          maxLength={10}
        />
      </LinearGradient>

      <Button
        onPress={handleContinueToGame}
        backgroundColor="#FFF"
        textColor="#000"
      >
        Continue
      </Button>
    </Container>
  );
};

export default ChooseNickname;
