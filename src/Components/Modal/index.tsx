import React from "react";
import { Modal, View } from "react-native";

import styles from "./styles";

interface ModalProps {
   visible: boolean;
}

const SettingsModal: React.FC<ModalProps> = ({ visible, children }) => {
   return (
      <Modal animationType="slide" transparent visible={visible}>
         <View style={styles.centeredView}>{children}</View>
      </Modal>
   );
};

export default SettingsModal;
