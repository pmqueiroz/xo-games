import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   height: 100%;
   align-items: center;
   margin: 5% 0;
`;
export const MatchesContainer = styled.ScrollView`
   flex: 1;
   width: 100%;
   height: 100%;
`;

export const MatchView = styled.View`
   background: #FFF;
   width: 97%;
   height: 89%;
   border-radius: 13px;
   flex-direction: row;
   justify-content: center;
   align-items: center;
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

export const ScoreboardText = styled.Text`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 20px;
   flex: 1;
   text-align: center;
`;

export const Title = styled.Text`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 25px;
   margin-bottom: 15px;
`;

export const PlayerOneText = styled.Text`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 23px;
   flex: 1;
   text-align: center;
`;

export const PlayerTwoText = styled.Text`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 23px;
   flex: 1;
   text-align: center;
`;
