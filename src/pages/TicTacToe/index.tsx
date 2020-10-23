import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import XImg from "../../images/X.png";
import OImg from "../../images/O.png";
import CogImg from "../../images/Cog.png";

export default function TicTacToe() {
   const initialBoardState = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
   ];

   const [currentPlayer, setCurrentPlayer] = useState(1);
   const [board, setBoard] = useState(initialBoardState);

   const [scoreboard, setScoreboard] = useState([0, 0]);

   const playerXName = "Player 1";
   const playerOName = "Player 2";

   function renderIcon(row: number, column: number) {
      const value = board[row][column];

      switch (value) {
         case 1:
            return <Image source={XImg} style={styles.tables} />;
         case -1:
            return <Image source={OImg} style={styles.tables} />;
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
         setBoard(initialBoardState);
         setCurrentPlayer(1);
      };

      const winner = calculateWinner();
      const currentScore = scoreboard.slice();
      if (winner === 1) {
         console.log("Player X wins this game");
         currentScore[0]++;
         setScoreboard(currentScore);
         resetGame();
      } else if (winner === -1) {
         console.log("Player O wins this game");
         currentScore[1]++;
         setScoreboard(currentScore);
         resetGame();
      } else if (winner === 0) {
         console.log("Tied game");
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
            <Text style={styles.scoreText}>{playerXName}</Text>
            <View style={styles.score}>
               <Text style={styles.scoreText}>
                  {scoreboard[0]} - {scoreboard[1]}
               </Text>
            </View>
            <Text style={styles.scoreText}>{playerOName}</Text>
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
               setScoreboard([0, 0]);
            }}
         >
            <Image style={styles.buttonIcon} source={CogImg}></Image>
         </TouchableOpacity>
      </View>
   );
}
