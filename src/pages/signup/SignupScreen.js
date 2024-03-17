import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { styles } from './styles.js';

const firebaseConfig = {
    apiKey: "AIzaSyDR5wIW0KijMa4hVUgIPkJb3CVDmjpIsvg",
    authDomain: "app1-ads4n.firebaseapp.com",
    projectId: "app1-ads4n",
    storageBucket: "app1-ads4n.appspot.com",
    messagingSenderId: "467754157325",
    appId: "1:467754157325:web:d42effbb7916feff415c44"
  };

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Função para trocar a visibilidade da senha
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Função para validar o formato do e-mail
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Função para validar a senha
  const validatePassword = (senha) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(senha);
  };

  const handleSignup = async () => {
    // Validar campos antes de prosseguir
    if (!email || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Erro", "Por favor, insira um e-mail válido.");
      return;
    }

    if (!validatePassword(senha)) {
      Alert.alert("Erro", "A senha deve conter pelo menos 8 caracteres, entre eles, pelo menos: uma letra maiúscula, uma letra minúscula, um número e um símbolo especial (como @$!%*#?&).");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não correspondem.");
      return;
    }

    // Se todas as validações passarem, realizar o cadastro
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      // Cadastro realizado com sucesso
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!", [
        { text: "OK", onPress: () => navigation.navigate('Login') }
      ]);
    } catch (error) {
      // Tratar erros
      Alert.alert("Erro", "Houve um erro ao cadastrar o usuário. Por favor, tente novamente.");
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
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
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite sua senha"
                  secureTextEntry={!showPassword} // Mostra a senha como oculta ou texto simples
                  value={senha}
                  onChangeText={setSenha}
                />
                <TouchableOpacity onPress={toggleShowPassword}>
                  <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="gray" style={{ marginLeft: 10 }} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text>Confirme a Senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                secureTextEntry={true}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};


export default SignupScreen;
