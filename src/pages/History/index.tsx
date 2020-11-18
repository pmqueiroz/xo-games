import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  MatchesContainer,
  MatchView,
  PlayerOneText,
  PlayerTwoText,
  Score,
  ScoreboardText,
} from './styles';

import Button from '../../Components/Button';

interface Matches {
   PlayerXName: string;
   PlayerOName: string;
   PLayerXScore: number;
   PLayerOScore: number;
}

const alo = [
  {
    PlayerXName: 'Cleiton',
    PlayerOName: 'Claudio',
    PLayerXScore: 1,
    PLayerOScore: 3,
  },
  {
    PlayerXName: 'Tutu',
    PlayerOName: 'Ramon',
    PLayerXScore: 3,
    PLayerOScore: 8,
  },
];

const History: React.FC = () => {
  const [matches, setMatches] = useState<Matches[]>(() => {
    const storedMatches = localStorage.getItem(
      '@XoGames:matches',
    );

    if (storedMatches) {
      return JSON.parse(storedMatches);
    }

    return [];
  });

  const navigation = useNavigation();

  function handleBackToMenu() {
    navigation.navigate('Home');
  }
  console.log(matches);

  return (
    <Container>
      <Title>History</Title>
      <MatchesContainer
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {matches.map((match) => (
          <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={['#3575F8', '#80D9DA']}
            style={{
              marginVertical: 15,
              width: '90%',
              height: 80,
              borderRadius: 13,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MatchView>
              <PlayerOneText>{match.PlayerXName}</PlayerOneText>
              <Score>
                <ScoreboardText>
                  {match.PLayerXScore}
                  {' '}
                  -
                  {' '}
                  {match.PLayerOScore}
                </ScoreboardText>
              </Score>
              <PlayerTwoText>{match.PlayerOName}</PlayerTwoText>
            </MatchView>
          </LinearGradient>
        ))}
      </MatchesContainer>
      <Button
        onPress={() => handleBackToMenu()}
        backgroundColor="#3879F9"
        textColor="#FFF"
      >
        Back
      </Button>
    </Container>
  );
};

export default History;
