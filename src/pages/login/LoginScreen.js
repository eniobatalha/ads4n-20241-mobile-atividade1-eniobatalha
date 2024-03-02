import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  const handleContatoPress = () => {
    navigation.navigate('Contatos');
  };

  return (
    <View style={styles.container}>
      <Icon name="user" size={150} color="gray" />
      <View style={styles.inputContainer}>
        <Text>Login:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu login"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleContatoPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCadastro} onPress={handleSignupPress} backgroundColor>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
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

export default LoginScreen;