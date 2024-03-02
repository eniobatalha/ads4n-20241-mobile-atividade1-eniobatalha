import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backButton}>
            <Ionicons name="arrow-back-circle-sharp" size={34} color="white" />
            <Text style={styles.backButtonText}></Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>USUÁRIO</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text>nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>cpf:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu CPF"
            keyboardType="numeric"
            maxLength={11}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4882c2",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30,
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 16,
    color: "white",
    marginLeft: 5, 
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
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
    backgroundColor: "#4882c2",
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