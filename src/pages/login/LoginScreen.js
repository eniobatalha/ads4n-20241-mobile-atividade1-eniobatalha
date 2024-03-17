import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { styles } from './styles.js';

const firebaseConfig = {
  apiKey: "AIzaSyDR5wIW0KijMa4hVUgIPkJb3CVDmjpIsvg",
  authDomain: "app1-ads4n.firebaseapp.com",
  projectId: "app1-ads4n",
  storageBucket: "app1-ads4n.appspot.com",
  messagingSenderId: "467754157325",
  appId: "1:467754157325:web:d42effbb7916feff415c44"
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setEmail('');
      setSenha('');
    });
    return unsubscribe;
  }, [navigation]);

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = async () => {
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);

      // Login realizado com sucesso
      // Alert.alert("Sucesso", "Login realizado com sucesso!");
      // Redirecionar para a rota de Contatos
      navigation.navigate('Contatos');
    } catch (error) {
      // Tratar erros
      Alert.alert("Erro", "Credenciais inválidas. Por favor, verifique seu email e senha.");
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      
      <View style={styles.container}>
        <Icon name="user" size={150} color="gray" />
        <View style={styles.inputContainer}>
          <Text>Login:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu login"
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
        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCadastro} onPress={handleSignupPress}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
