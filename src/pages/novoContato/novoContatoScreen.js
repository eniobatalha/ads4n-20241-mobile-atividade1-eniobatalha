import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const NovoContatoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Contatos')} style={styles.backButton}>
            <Ionicons name="arrow-back-circle-sharp" size={34} color="white" />
            <Text style={styles.backButtonText}></Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>NOVO CONTATO</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do contato"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o email do contato"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o telefone do contato"
            keyboardType="phone-pad"
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

export default NovoContatoScreen;