import React from 'react';

import Button from '../../../Components/Button';
import { ButtonContainer } from '../../Home/styles';
import {
  Container, Text, Title, Separator, Card, PlayerName,
} from './styles';

interface CardProps{
   name: string;
   position: number;
   points: number;
}

const HMRanking: React.FC = () => {
  const mockPlayer = [
    {
      key: 1,
      playerName: 'Player 1',
      ranking: 2,
      points: 20,
    },
    {
      key: 2,
      playerName: 'Player 2',
      ranking: 1,
      points: 80,
    },
  ];

  function handlePlayAgain() {
    // reset game and restart
  }

  function handleBackToMenu() {
    // reset game and restart
  }

  const RankingCard: React.FC<CardProps> = ({ position, name, points }) => (
    <Card>
      <Text>
        {position}
        st
      </Text>
      <PlayerName>{name}</PlayerName>
      <Text>
        {points}
        {' '}
        points
      </Text>
    </Card>
  );

  return (
    <Container>
      <Title>Ranking</Title>
      <Separator />
      {mockPlayer.sort().map((player) => (
        <RankingCard
          key={player.key}
          position={player.ranking}
          name={player.playerName}
          points={player.points}
        />
      ))}
      <Separator />
      <ButtonContainer>
        <Button
          onPress={handlePlayAgain}
          backgroundColor="#3879F9"
          textColor="#FFF"
        >
          Play Again
        </Button>
        <Button
          onPress={handleBackToMenu}
          backgroundColor="#FFF"
          textColor="#000"
        >
          Menu
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default HMRanking;
