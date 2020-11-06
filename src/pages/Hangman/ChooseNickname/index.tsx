import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { PlayerNameInput } from './styles';

const HMChooseNickname: React.FC = () => (
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
      placeholder="Player X"
      // onChangeText={(text: string) => setPlayerXName(text)}
      maxLength={10}
    />
  </LinearGradient>
);

export default HMChooseNickname;
