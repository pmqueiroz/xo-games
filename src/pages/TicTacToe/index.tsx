import React, { useState } from "react";
import { 
   View, 
   Image, 
   TouchableOpacity, 
   Text,
   TextInput
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

import Modal from '../../Components/Modal';

import styles from "./styles";
import XImg from "../../images/X.png";
import OImg from "../../images/O.png";
import CogImg from "../../images/Cog.png";

export default function TicTacToe() {
   const navigation = useNavigation();

   function handleGoToMenu () {
      fullResetGame();
      navigation.navigate('Home');
   }

   function fullResetGame() {
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

   const [currentPlayer, setCurrentPlayer] = useState(1);
   const [board, setBoard] = useState(initialBoardState);
   const [modalVisible, setModalVisible] = useState(false);
   const [scoreboard, setScoreboard] = useState([0, 0]);
   const [playerXName, setPlayerXName] = useState("Player X");
   const [playerOName, setPlayerOName] = useState("Player O");

   const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

   function renderIcon(row: number, column: number) {
      const value = board[row][column];

      switch (value) {
         case 1:
            return <Image source={XImg} style={styles.tileIcon} />;
         case -1:
            return <Image source={OImg} style={styles.tileIcon} />;
         default:
            return <View />;
      }
   }

   function onTilePress(row: number, column: number) {
      const nextBoard = board.slice();

      if (nextBoard[row][column] !== 0) {
         return;
      }

      nextBoard[row][column] = currentPlayer;
      setBoard(nextBoard);
      const player = currentPlayer == 1 ? -1 : 1;
      setCurrentPlayer(player);

      const resetGame = () => {
         delay(500).then(() => {
            setBoard(initialBoardState);
            setCurrentPlayer(1);
         })
      };

      const winner = calculateWinner();
      const currentScore = scoreboard.slice();
      if (winner === 1) {
         currentScore[0]++;
         setScoreboard(currentScore);
         resetGame();
      } else if (winner === -1) {
         currentScore[1]++;
         setScoreboard(currentScore);
         resetGame();
      } else if (winner === 0) {
         resetGame();
      }
   }

   function calculateWinner() {
      const currentGame = board;
      var check;

      for (var i = 0; i < 3; i++) {
         check = currentGame[i][0] + currentGame[i][1] + currentGame[i][2];

         if (check == 3) {
            return 1;
         } else if (check == -3) {
            return -1;
         }
      }

      for (var i = 0; i < 3; i++) {
         check = currentGame[0][i] + currentGame[1][i] + currentGame[2][i];

         if (check == 3) {
            return 1;
         } else if (check == -3) {
            return -1;
         }
      }

      check = currentGame[0][0] + currentGame[1][1] + currentGame[2][2];
      if (check == 3) {
         return 1;
      } else if (check == -3) {
         return -1;
      }

      check = currentGame[2][0] + currentGame[1][1] + currentGame[0][2];
      if (check == 3) {
         return 1;
      } else if (check == -3) {
         return -1;
      }

      for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
            if (currentGame[i][j] === 0) {
               return 3;
            }
         }
      }

      return 0;
   }

   return (
      <View style={styles.container}>
         <View style={styles.scoreboard}>
            <Text style={[styles.scoreText, currentPlayer === 1 ? styles.activeX: null]}>{playerXName}</Text>
            <View style={styles.score}>
               <Text style={styles.scoreText}>
                  {scoreboard[0]} - {scoreboard[1]}
               </Text>
            </View>
            <Text style={[styles.scoreText, currentPlayer === -1 ? styles.activeO: null]}>{playerOName}</Text>
         </View>

         <View style={styles.canvas}>
            <View style={{ flexDirection: "row" }}>
               <TouchableOpacity
                  onPress={() => {
                     onTilePress(0, 0);
                  }}
                  style={[
                     styles.tile,
                     { borderLeftWidth: 0, borderTopWidth: 0 },
                  ]}
               >
                  {renderIcon(0, 0)}
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {
                     onTilePress(0, 1);
                  }}
                  style={[styles.tile, { borderTopWidth: 0 }]}
               >
                  {renderIcon(0, 1)}
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {
                     onTilePress(0, 2);
                  }}
                  style={[
                     styles.tile,
                     { borderRightWidth: 0, borderTopWidth: 0 },
                  ]}
               >
                  {renderIcon(0, 2)}
               </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
               <TouchableOpacity
                  onPress={() => {
                     onTilePress(1, 0);
                  }}
                  style={[styles.tile, { borderLeftWidth: 0 }]}
               >
                  {renderIcon(1, 0)}
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {
                     onTilePress(1, 1);
                  }}
                  style={styles.tile}
               >
                  {renderIcon(1, 1)}
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {
                     onTilePress(1, 2);
                  }}
                  style={[styles.tile, { borderRightWidth: 0 }]}
               >
                  {renderIcon(1, 2)}
               </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
               <TouchableOpacity
                  onPress={() => {
                     onTilePress(2, 0);
                  }}
                  style={[
                     styles.tile,
                     { borderLeftWidth: 0, borderBottomWidth: 0 },
                  ]}
               >
                  {renderIcon(2, 0)}
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {
                     onTilePress(2, 1);
                  }}
                  style={[styles.tile, { borderBottomWidth: 0 }]}
               >
                  {renderIcon(2, 1)}
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {
                     onTilePress(2, 2);
                  }}
                  style={[
                     styles.tile,
                     { borderRightWidth: 0, borderBottomWidth: 0 },
                  ]}
               >
                  {renderIcon(2, 2)}
               </TouchableOpacity>
            </View>
         </View>

         <TouchableOpacity
            style={styles.config}
            onPress={() => {
               setModalVisible(!modalVisible);
            }}
         >
            <Image style={styles.buttonIcon} source={CogImg}></Image>
         </TouchableOpacity>
         <Modal
            visible={modalVisible}
         >
            <View  style={styles.modalContainer}>
               <Text style={styles.titleText}>
                  Settings
               </Text>
               <View style={styles.separator} />
               <LinearGradient 
                  start={[0, 0.5]} 
                  end={[1, 0.5]} 
                  colors={['#3575F8', '#80D9DA']}
                  style={styles.linearGradient}
               >
                  <TextInput 
                     placeholder={playerXName} 
                     style={[styles.nameInput]}
                     onChangeText={text => setPlayerXName(text)}
                     maxLength = {10}
                  />
               </LinearGradient>
               <LinearGradient 
                  start={[0, 0.5]} 
                  end={[1, 0.5]} 
                  colors={['#F77634', '#F1D06E']}
                  style={styles.linearGradient}
               >
                  <TextInput 
                     placeholder={playerOName} 
                     style={[styles.nameInput]}
                     onChangeText={text => setPlayerOName(text)}
                     maxLength = {10}
                  />
               </LinearGradient>
               <View style={styles.separator} />
               <TouchableOpacity 
                  style={styles.button}
                  onPress={fullResetGame}
               >
                  <Text style={styles.buttonText}>Reset Game</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                  style={styles.button}
                  onPress={handleGoToMenu}
               >
                  <Text style={styles.buttonText}>Menu</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                  style={[styles.button, styles.buttonWhite]}
                  onPress={() => {
                     setModalVisible(!modalVisible);
                  }}
               >
                  <Text style={[styles.buttonText, styles.buttonTextBlack]}>Continue</Text>
               </TouchableOpacity>
            </View>
         </Modal>
      </View>
   );
}
