import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: space-between;
   align-items: center;
   padding: 15% 0;
   background-color: #F7F9F8;
`;

export const PlayerNameInput = styled.TextInput`
   background-color: #F7F9F8;
   width: 95%;
   height: 75%;
   border-radius: 50px;
   padding-left: 10px;
`;

export const Title = styled.Text`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 20px;
   text-align: center;
   margin-bottom: 20px;
`;

export const ControlImg = styled.Image`
   width: 120px;
   height: 120px;
`;
