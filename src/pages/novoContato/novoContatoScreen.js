import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from './styles.js';
import { TextInputMask } from 'react-native-masked-text';

const NovoContatoScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const apiUrl = 'http://192.168.0.191:8000/contatos';

  const cadastrarContato = async () => {
    try {
      const novoContato = {
        name: nome,
        avatar_url: "https://cdn.icon-icons.com/icons2/3399/PNG/512/contact_icon_214941.png",
        email: email,
        phone: telefone
      };
      await axios.post(apiUrl, novoContato);
      Alert.alert('Sucesso', 'Novo contato cadastrado com sucesso!');
      navigation.navigate('Contatos');
    } catch (error) {
      console.error('Erro ao cadastrar novo contato:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar novo contato. Por favor, tente novamente mais tarde.');
    }
  };  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
              value={nome}
              onChangeText={text => setNome(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o email do contato"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Telefone:</Text>
            <TextInputMask
              style={styles.input}
              placeholder="(81)98765-4321"
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value={telefone}
              onChangeText={text => setTelefone(text)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={cadastrarContato}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NovoContatoScreen;