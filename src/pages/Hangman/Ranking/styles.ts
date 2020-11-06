import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: space-between;
   align-items: center;
   margin: 20% 0;
   padding: 0 10%;
`;

export const Title = styled.Text`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 25px;
   text-align: center;
`;

export const Text = styled.Text`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 20px;
   text-align: center;
`;

export const PlayerName = styled.Text`
   font-weight: 500;
   color: #3879F9;
   font-family: 'Roboto_500Medium';
   font-size: 25px;
   text-align: center;
`;

export const Separator = styled.View`
   border-Bottom-Color: #ADA6A6;
   border-Bottom-Width: 1.5px;
   margin: 15px 0;
   width: 80%;
`;

export const Card = styled.View`
   flex-direction: row;
   width: 100%;
   elevation: 5;
   justify-content: space-between;
   align-items: center;
   background: #fff;
   border-radius: 20px;
   height: 100px;
   padding: 20px;
`;
