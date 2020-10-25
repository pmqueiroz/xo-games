import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, ButtonText } from './styles';

interface ButtonProps{
   backgroundColor: string;
   textColor: string;
   onPress(): void;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  textColor,
  children,
  onPress,
}) => (
  <Container backgroundColor={backgroundColor} onPress={onPress}>
    <ButtonText textColor={textColor}>
      {children}
    </ButtonText>
  </Container>
);

export default Button;
