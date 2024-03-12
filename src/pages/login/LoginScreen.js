import React from "react";
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  const handleContatoPress = () => {
    navigation.navigate('Contatos');
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
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;