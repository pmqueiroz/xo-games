import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F7F9F8',
     alignItems: 'center',
     justifyContent: 'center',
     width: '100%',
     height:' 100%'
   },

   tile: {
      borderWidth: 1,
      borderColor: '#ADA6A6',
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
   },

   tables: {
      width: 60,
      height: 60,
   },

   canvas: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset:{  width: 0,  height: 0,  },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 30,
      padding: 20,
      borderRadius: 20,
   }
 })

 export default styles;