import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Icon name="user" size={150} color="gray" />
      <View style={styles.inputContainer}>
        <Text>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignupPress}>
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
  button: {
    backgroundColor: "#25C089",
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