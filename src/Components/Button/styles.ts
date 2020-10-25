import styled from 'styled-components/native';

interface ContainerProps {
   backgroundColor: string;
}
interface TextProps {
   textColor: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
   background-color: ${(props) => props.backgroundColor};
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
export const ButtonText = styled.Text<TextProps>`
   color: ${(props) => props.textColor};
   font-family: 'Roboto_400Regular';
   font-size: 15px;
`;
