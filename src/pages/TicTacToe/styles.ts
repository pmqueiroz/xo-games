import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F9F8',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },

  screen: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },

  tile: {
    borderWidth: 1,
    borderColor: '#ADA6A6',
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    maxWidth: 100,
    maxHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tileIcon: {
    width: 60,
    height: 60,
  },

  canvas: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    //  shadowOffset: { width: 0, height: 0 },
    //  shadowColor: 'black',
    //  shadowOpacity: 0.3,
    //  shadowRadius: 30,
    elevation: 5,
  },

  scoreboard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  score: {
    backgroundColor: '#FFFFFF',
    width: 70,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    //  shadowOffset: { width: 0, height: 0 },
    //  shadowColor: 'black',
    //  shadowOpacity: 0.3,
    //  shadowRadius: 10,
    elevation: 5,
  },

  scoreText: {
    fontWeight: '500',
    color: '#3E5A82',
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },

  activeX: {
    color: '#3879F9',
  },

  activeO: {
    color: '#F77634',
  },

  config: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    //  shadowOffset: { width: 0, height: 0 },
    //  shadowColor: 'black',
    //  shadowOpacity: 0.3,
    //  shadowRadius: 10,
    elevation: 5,
  },

  buttonIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

  modalContainer: {
    backgroundColor: '#FFF',
    width: '90%',
    maxWidth: 500,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    paddingVertical: 40,
    //  shadowOffset: { width: 0, height: 0 },
    //  shadowColor: 'black',
    //  shadowOpacity: 0.3,
    //  shadowRadius: 30,
    elevation: 5,
  },

  modalBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100,100,100, 0.2)',
  },

  titleText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
    color: '#3E5A82',
  },

  separator: {
    borderBottomColor: '#ADA6A6',
    borderBottomWidth: 1.5,
    marginVertical: 15,
    width: '80%',
  },

  nameInput: {
    backgroundColor: '#FFF',
    width: '95%',
    height: '75%',
    borderRadius: 50,
    paddingLeft: 10,
  },

  linearGradient: {
    marginVertical: 15,
    width: '75%',
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#3879F9',
    width: 120,
    height: 35,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    //  shadowOffset: { width: 0, height: 0 },
    //  shadowColor: 'black',
    //  shadowOpacity: 0.3,
    //  shadowRadius: 10,
    elevation: 5,
  },

  buttonWhite: {
    backgroundColor: '#FFF',
  },

  buttonText: {
    color: '#FFF',
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
  },

  buttonTextBlack: {
    color: '#000',
  },
});

export default styles;
