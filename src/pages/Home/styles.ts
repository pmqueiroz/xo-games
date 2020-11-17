import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: #F7F9F8;
   align-items: center;
   justify-content: center;
   width: 100%;
   height:  100%;
`;

export const Logo = styled.Image`
   width: 90%;
   min-height: 200px;
   margin-bottom: 60px;
`;

export const Title = styled.Text`
   font-weight: 500;
   color: #3E5A82;
   font-family: 'Roboto_500Medium';
   font-size: 20px;
`;

export const ButtonContainer = styled.View`
   margin-top: 40px;
   justify-content: center;
   align-items: center;
`;

export const Button = styled.TouchableOpacity`
   background-color: #3879F9;
   width: 150px;
   height: 50px;
   padding-top: 5px;
   padding-bottom: 5px;
   padding-right: 10px;
   padding-left: 10px;
   border-radius: 70px;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
   elevation: 5;
`;

export const ButtonText = styled.Text`
   color: #FFF;
   font-family: 'Roboto_400Regular';
   font-size: 15px;
`;

export const HistoryBtn = styled.TouchableOpacity`
   margin-top: 20px;
   background-color: #FFFFFF;
   width: 50px;
   height: 50px;
   border-Radius: 25px;
   justify-content: center;
   align-items: center;
   elevation: 5;
`;
export const HistoryIcon = styled.Image`
   width: 35px;
   height: 35px;
`;
