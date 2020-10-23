import React from 'react';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

import styles from './styles';

interface ModalProps {
   visible: boolean;
}

const Modal: React.FC<ModalProps> = ({ visible, children }) => {
  return (
   <BlurView 
      style={[
         styles.container, 
         !visible ? styles.hide : styles.shown,
         StyleSheet.absoluteFill
      ]}
      intensity={10}
   >
      {children}
   </BlurView>
  );
}

export default Modal;