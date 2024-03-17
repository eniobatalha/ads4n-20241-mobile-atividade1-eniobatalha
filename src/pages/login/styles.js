import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 50,
      paddingBottom: 280,
    },
    inputContainer: {
      width: "100%",
      marginBottom: 20,
      fontSize: 18,
    },
    input: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 5,
      paddingHorizontal: 10,
      marginTop: 5,
      height: 30
    },
    buttonLogin: {
      backgroundColor: "#4882c2",
      width: "100%",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonCadastro: {
      backgroundColor: "#C02525",
      width: "100%",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontSize: 18,
    },
  });