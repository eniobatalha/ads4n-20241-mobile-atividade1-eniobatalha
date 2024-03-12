import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from './styles.js';
import { TextInputMask } from 'react-native-masked-text';

const SignupScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignup = async () => {
    // Depois faço a lógica de cadastro aqui
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            <Text>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>CPF:</Text>
            <TextInputMask
              style={styles.input}
              placeholder="Digite seu CPF"
              type={'cpf'}
              value={cpf}
              onChangeText={text => setCpf(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignupScreen;
