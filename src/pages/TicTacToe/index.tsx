import React, { useState } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Modal from '../../Components/Modal';
import {
  Container,
  Scoreboard,
  ScoreboardText,
  Score,
  Canvas,
  CanvasRow,
  Tile,
  TileIcon,
  ConfigButton,
  ConfigButtonIcon,
  ModalContainer,
  ModalView,
  Title,
  Separator,
  PlayerNameInput,
} from './styles';

import Button from '../../Components/Button';

import XImg from '../../images/X.png';
import OImg from '../../images/O.png';
import CogImg from '../../images/Cog.png';

const TicTacToe: React.FC = () => {
  const navigation = useNavigation();

  function handleGoToMenu() {
    resetGame();
    navigation.navigate('Home');
  }

  function resetGame() {
    setModalVisible(false);
    setBoard(initialBoardState);
    setCurrentPlayer(1);
    setScoreboard([0, 0]);
  }

  const initialBoardState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const [playingVsAI, setPlayingVsAI] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState(initialBoardState);
  const [modalVisible, setModalVisible] = useState(false);
  const [scoreboard, setScoreboard] = useState([0, 0]);
  const [playerXName, setPlayerXName] = useState('Player X');
  const [playerOName, setPlayerOName] = useState('Player O');

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  function renderIcon(row: number, column: number) {
    const value = board[row][column];

    switch (value) {
      case 1:
        return <TileIcon source={XImg} />;
      case -1:
        return <TileIcon source={OImg} />;
      default:
        return <View />;
    }
  }

  function resetBoard() {
    delay(500).then(() => {
      setBoard(initialBoardState);
      setCurrentPlayer(1);
    });
  }

  function checkWinner() {
    const winner = calculateWinner();
    const currentScore = scoreboard.slice();
    if (winner === 1) {
      currentScore[0] += 1;
      setScoreboard(currentScore);
      resetBoard();
      return true;
    } if (winner === -1) {
      currentScore[1] += 1;
      setScoreboard(currentScore);
      resetBoard();
      return true;
    } if (winner === 0) {
      resetBoard();
      return true;
    }
    return false;
  }

  function onTilePress(row: number, column: number) {
    const nextBoard = board.slice();

    if (nextBoard[row][column] !== 0) {
      return;
    }

    nextBoard[row][column] = currentPlayer;
    setBoard(nextBoard);

    if (checkWinner()) {
      return;
    }

    if (playingVsAI) {
      setCurrentPlayer(-1);
      delay(500).then(() => {
        AIPlay();
      });
    } else {
      const player = currentPlayer === 1 ? -1 : 1;
      setCurrentPlayer(player);
    }
  }

  function calculateWinner() {
    const currentGame = board;
    let check;

    for (let i = 0; i < 3; i += 1) {
      check = currentGame[i][0] + currentGame[i][1] + currentGame[i][2];

      if (check === 3) {
        return 1;
      } if (check === -3) {
        return -1;
      }

      check = currentGame[0][i] + currentGame[1][i] + currentGame[2][i];

      if (check === 3) {
        return 1;
      } if (check === -3) {
        return -1;
      }
    }

    check = currentGame[0][0] + currentGame[1][1] + currentGame[2][2];
    if (check === 3) {
      return 1;
    } if (check === -3) {
      return -1;
    }

    check = currentGame[0][2] + currentGame[1][1] + currentGame[2][0];
    if (check === 3) {
      return 1;
    } if (check === -3) {
      return -1;
    }

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (currentGame[i][j] === 0) {
          return 3;
        }
      }
    }

    return 0;
  }

  function AIPlay() {
    const currentGame = board;
    const nextBoard = board.slice();

    let i;
    let j;

    const bestPlay:number[] = [];

    const mainDiagonal = currentGame[0][0] + currentGame[1][1] + currentGame[2][2];
    const coDiagonal = currentGame[0][2] + currentGame[1][1] + currentGame[2][0];

    if ((coDiagonal === -2) || (coDiagonal === 2)) {
      if ((currentGame[1][1] + currentGame[2][0] - 1 === -3) ||
      (currentGame[1][1] + currentGame[2][0] + 1 === 3)) {
        bestPlay.push(0, 2);
      }
      if ((currentGame[0][2] + currentGame[2][0] - 1 === -3) ||
      (currentGame[0][2] + currentGame[2][0] + 1 === 3)) {
        bestPlay.push(1, 1);
      }
      if ((currentGame[0][2] + currentGame[1][1] - 1 === -3) ||
      (currentGame[0][2] + currentGame[1][1] + 1 === 3)) {
        bestPlay.push(2, 0);
      }
    }

    if ((mainDiagonal === -2) || (mainDiagonal === 2)) {
      if ((currentGame[0][0] + currentGame[1][1] - 1 === -3) ||
      (currentGame[0][0] + currentGame[1][1] + 1 === 3)) {
        bestPlay.push(2, 2);
      }
      if ((currentGame[0][0] + currentGame[2][2] - 1 === -3) ||
      (currentGame[0][0] + currentGame[2][2] + 1 === 3)) {
        bestPlay.push(1, 1);
      }
      if ((currentGame[1][1] + currentGame[2][2] - 1 === -3) ||
      (currentGame[1][1] + currentGame[2][2] + 1 === 3)) {
        bestPlay.push(0, 0);
      }
    }

    //  for (let index = 0; index < 3; index += 1) {
    //    let possiblePlay = currentGame[index][0] + currentGame[index][1] + currentGame[index][2];

    //    if (possiblePlay === -2) {
    //      for (let jIndex = 0; jIndex < 3; jIndex += 1) {

    //      }
    //      bestPlay.push();
    //    } if (possiblePlay === 2) {
    //      bestPlay.push();
    //    }

    //    possiblePlay = currentGame[0][index] + currentGame[1][index] + currentGame[2][index];

    //    if (possiblePlay === -2) {
    //      return 1;
    //    } if (possiblePlay === 2) {
    //      return -1;
    //    }
    //  }
    if (!bestPlay.length) {
      do {
        i = Math.floor(Math.random() * Math.floor(3));
        j = Math.floor(Math.random() * Math.floor(3));
      } while (currentGame[i][j] !== 0);
    }

    if (bestPlay.length) {
      nextBoard[bestPlay[0]][bestPlay[1]] = -1;
      setBoard(nextBoard);
    } else {
      nextBoard[i][j] = -1;
      setBoard(nextBoard);
    }

    checkWinner();

    setCurrentPlayer(1);
  }

  return (
    <Container>
      <Scoreboard>
        <ScoreboardText>
          {playerXName}
        </ScoreboardText>
        <Score>
          <ScoreboardText>
            {scoreboard[0]}
            {' '}
            -
            {' '}
            {scoreboard[1]}
          </ScoreboardText>
        </Score>
        <ScoreboardText>
          {playingVsAI ? 'AI' : playerOName}
        </ScoreboardText>
      </Scoreboard>

      <Canvas>
        <CanvasRow>
          <Tile
            onPress={() => {
              if (!(playingVsAI && currentPlayer === -1)) {
                onTilePress(0, 0);
              }
            }}
            style={{ borderLeftWidth: 0, borderTopWidth: 0 }}
          >
            {renderIcon(0, 0)}
          </Tile>
          <Tile
            onPress={() => {
              if (!(playingVsAI && currentPlayer === -1)) {
                onTilePress(0, 1);
              }
            }}
            style={{ borderTopWidth: 0 }}
          >
            {renderIcon(0, 1)}
          </Tile>
          <Tile
            onPress={() => {
              if (!(playingVsAI && currentPlayer === -1)) {
                onTilePress(0, 2);
              }
            }}
            style={{ borderRightWidth: 0, borderTopWidth: 0 }}
          >
            {renderIcon(0, 2)}
          </Tile>
        </CanvasRow>
        <CanvasRow>
          <Tile
            onPress={() => {
              if (!(playingVsAI && currentPlayer === -1)) {
                onTilePress(1, 0);
              }
            }}
            style={{ borderLeftWidth: 0 }}
          >
            {renderIcon(1, 0)}
          </Tile>
          <Tile
            onPress={() => {
              if (!(playingVsAI && currentPlayer === -1)) {
                onTilePress(1, 1);
              }
            }}
          >
            {renderIcon(1, 1)}
          </Tile>
          <Tile
            onPress={() => {
              if (!(playingVsAI && currentPlayer === -1)) {
                onTilePress(1, 2);
              }
            }}
            style={{ borderRightWidth: 0 }}
          >
            {renderIcon(1, 2)}
          </Tile>
        </CanvasRow>
        <CanvasRow>
          <Tile
            onPress={() => {
              if (!(playingVsAI && currentPlayer === -1)) {
                onTilePress(2, 0);
              }
            }}
            style={{ borderLeftWidth: 0, borderBottomWidth: 0 }}
          >
            {renderIcon(2, 0)}
          </Tile>
          <Tile
            onPress={() => {
              if (!(playingVsAI && currentPlayer === -1)) {
                onTilePress(2, 1);
              }
            }}
            style={{ borderBottomWidth: 0 }}
          >
            {renderIcon(2, 1)}
          </Tile>
          <Tile
            onPress={() => {
              if (!(playingVsAI && currentPlayer === -1)) {
                onTilePress(2, 2);
              }
            }}
            style={{ borderRightWidth: 0, borderBottomWidth: 0 }}
          >
            {renderIcon(2, 2)}
          </Tile>
        </CanvasRow>
      </Canvas>

      <ConfigButton
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ConfigButtonIcon source={CogImg} resizeMode="contain" />
      </ConfigButton>

      <Modal visible={modalVisible}>
        <ModalContainer>
          <ModalView>
            <Title>Settings</Title>
            <Separator />
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
                onChangeText={(text: string) => setPlayerXName(text)}
                maxLength={10}
              />
            </LinearGradient>
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
                editable={!playingVsAI}
                placeholder="Player O"
                onChangeText={(text: string) => setPlayerOName(text)}
                maxLength={10}
              />
            </LinearGradient>
            <Separator />
            <Button
              onPress={resetGame}
              backgroundColor="#3879F9"
              textColor="#FFF"
            >
              Reset Game
            </Button>
            <Button
              onPress={handleGoToMenu}
              backgroundColor="#3879F9"
              textColor="#FFF"
            >
              Menu
            </Button>
            <Button
              onPress={() => {
                setPlayingVsAI(!playingVsAI);
                resetGame();
                setModalVisible(!modalVisible);
              }}
              backgroundColor="#3879F9"
              textColor="#FFF"
            >
              {playingVsAI ? 'Play PvP' : 'Play vs IA'}
            </Button>
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              backgroundColor="#FFF"
              textColor="#000"
            >
              Continue
            </Button>
          </ModalView>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default TicTacToe;
