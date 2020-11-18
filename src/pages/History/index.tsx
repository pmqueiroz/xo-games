import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {
  Container,
  Title,
  MatchesContainer,
  MatchView,
  PlayerOneText,
  PlayerTwoText,
  Score,
  ScoreboardText,
  Header,
  DeleteImg,
  DeleteButton,
} from './styles';

import Button from '../../Components/Button';

import deleteImg from '../../images/Trash.png';

interface Matches {
   PlayerXName: string;
   PlayerOName: string;
   PLayerXScore: number;
   PLayerOScore: number;
}

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

  function handleDeleteHistory() {
    localStorage.setItem(
      '@XoGames:matches',
      JSON.stringify(''),
    );

    setMatches([]);
  }

  useFocusEffect(() => {
    const storedMatches = localStorage.getItem(
      '@XoGames:matches',
    );
    if (storedMatches?.length) {
      setMatches(JSON.parse(storedMatches));
    }
  });

  return (
    <Container>
      <Header>
        <Title>History</Title>
        <DeleteButton onPress={handleDeleteHistory}>
          <DeleteImg source={deleteImg} />
        </DeleteButton>
      </Header>
      <MatchesContainer
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {matches.length ? matches.map((match, id) => {
          let colorWinner;
          const key = id;

          if (match.PLayerOScore > match.PLayerXScore) {
            colorWinner = ['#F77634', '#F1D06E'];
          } else if (match.PLayerOScore < match.PLayerXScore) {
            colorWinner = ['#3575F8', '#80D9DA'];
          } else {
            colorWinner = ['#a3a3a3a3', '#a3a3a3a3'];
          }

          return (
            <LinearGradient
              start={[0, 0.5]}
              end={[1, 0.5]}
              colors={colorWinner}
              style={{
                marginVertical: 15,
                width: '90%',
                height: 80,
                borderRadius: 13,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              key={key}
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
          );
        }) : null}
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
