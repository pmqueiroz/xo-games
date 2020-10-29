import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

interface PlayerTextProps {
   active: boolean;
}

export const Container = styled.View`
   background-color: #F7F9F8;
   align-items: center;
   justify-content: space-around;
   width: 100%;
   height: 100%;
`;

export const Scoreboard = styled.View`
   width: 100%;
   justify-content: center;
   align-items: center;
   flex-direction: row;
`;

export const ScoreboardText = styled.Text`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 20px;
   flex: 1;
   text-align: center;
`;

export const PlayerOneText = styled.Text<PlayerTextProps>`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 20px;
   flex: 1;
   text-align: center;

   ${(props) => props.active &&
      css`
         color: #3879F9;
      `}
`;

export const PlayerTwoText = styled.Text<PlayerTextProps>`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 20px;
   flex: 1;
   text-align: center;

   ${(props) => props.active &&
      css`
         color: #F69143;
      `}
`;

export const Score = styled.View`
   background-color: #FFFFFF;
   width: 70px;
   height: 30px;
   border-radius: 50px;
   justify-content: center;
   align-items: center;
   margin: 0 20px;
   elevation: 5;
`;

export const Canvas = styled.View`
   background-color: #FFFFFF;
   align-items: center;
   justify-content: center;
   padding: 20px;
   border-radius: 20px;
   elevation: 5;
`;

export const CanvasRow = styled.View`
   flex-direction: row;
`;

export const Tile = styled.TouchableOpacity`
   border-width: 1px;
   border-color: #ADA6A6;
   width: ${windowWidth * 0.25};
   height: ${windowWidth * 0.25};
   max-width: 100px;
   max-height: 100px;
   align-items: center;
   justify-content: center;
`;

export const TileIcon = styled.Image`
   width: 60px;
   height: 60px;
`;

export const ConfigButton = styled.TouchableOpacity`
   background-color: #FFFFFF;
   width: 50px;
   height: 50px;
   border-Radius: 25px;
   justify-content: center;
   align-items: center;
   elevation: 5;
`;

export const ConfigButtonIcon = styled.Image`
   width: 35px;
   height: 35px;
`;

export const ModalContainer = styled.View`
   width: 100%;
   height: 100%;
   justify-content: center;
   align-items: center;
   background-color: rgba(100,100,100, 0.2);
`;

export const ModalView = styled.View`
   background-Color: #FFF;
   width: 90%;
   max-Width: 500px;
   height: auto;
   align-Items: center;
   justify-Content: center;
   padding: 20px;
   border-Radius: 20px;
   padding: 40px 0;
   elevation: 5;
`;

export const Title = styled.Text`
   font-family: 'Roboto_500Medium';
   font-size: 24px;
   color: #3E5A82;
`;

export const Separator = styled.View`
   border-Bottom-Color: #ADA6A6;
   border-Bottom-Width: 1.5px;
   margin: 15px 0;
   width: 80%;
`;

export const PlayerNameInput = styled.TextInput`
   background-color: #FFF;
   width: 95%;
   height: 75%;
   border-radius: 50px;
   padding-left: 10px;
`;

export const Button = styled.TouchableOpacity`
   background-color: #3879F9;
   width: 120px;
   height: 35px;
   padding: 5px 10px;
   border-radius: 70px;
   align-items: center;
   justify-content: center;
   margin-top: 15px;
   elevation: 5;
`;

export const ButtonText = styled.Text`
   color: #FFF;
   font-family: 'Roboto_400Regular';
   font-size: 15;
`;
