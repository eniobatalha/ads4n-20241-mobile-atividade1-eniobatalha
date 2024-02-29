import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CADASTRO</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Email:</Text>
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
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "center",
  },
  header: {
    backgroundColor: "lightgray",
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
  },
  inputContainer: {
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
});

export default SignupScreen;
