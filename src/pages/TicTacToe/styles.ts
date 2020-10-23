import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#F7F9F8",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
      height: "100%",
   },

   tile: {
      borderWidth: 1,
      borderColor: "#ADA6A6",
      width: 100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
   },

   tables: {
      width: 60,
      height: 60,
   },

   canvas: {
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
      shadowOffset: { width: 0, height: 0 },
      shadowColor: "black",
      shadowOpacity: 0.3,
      shadowRadius: 30,
      padding: 20,
      borderRadius: 20,
   },

   scoreboard: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
   },

   score: {
      backgroundColor: "#FFFFFF",
      width: 70,
      height: 30,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
      shadowOffset: { width: 0, height: 0 },
      shadowColor: "black",
      shadowOpacity: 0.3,
      shadowRadius: 10,
   },

   scoreText: {
      fontWeight: "500",
      color: "#3E5A82",
      fontFamily: "Roboto_500Medium",
      fontSize: 20,
   },

   config: {
      backgroundColor: "#FFFFFF",
      width: 50,
      height: 50,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      shadowOffset: { width: 0, height: 0 },
      shadowColor: "black",
      shadowOpacity: 0.3,
      shadowRadius: 10,
   },

   buttonIcon: {
      width: 35,
      height: 35,
      resizeMode: "contain",
   },
});

export default styles;
