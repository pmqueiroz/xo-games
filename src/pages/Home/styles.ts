import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#F7F9F8",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: " 100%",
   },

   title: {
      fontWeight: "500",
      color: "#3E5A82",
      fontFamily: "Roboto_500Medium",
      fontSize: 20,
   },

   logo: {
      width: "90%",
      minHeight: 200,
      marginBottom: 60,
      resizeMode: "contain",
   },

   button: {
      backgroundColor: "#3879F9",
      width: 150,
      height: 50,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 70,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      shadowOffset: { width: 0, height: 5 },
      shadowColor: "black",
      shadowOpacity: 0.3,
      shadowRadius: 5,
   },

   buttonText: {
      color: "#FFF",
      fontFamily: "Roboto_400Regular",
      fontSize: 15,
   },

   buttonContainer: {
      marginTop: 40,
   },
});

export default styles;
