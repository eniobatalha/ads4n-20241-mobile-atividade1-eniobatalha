import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { styles } from './styles.js';
import { TextInputMask } from 'react-native-masked-text';

const AlteraContatoScreen = ({ navigation, route }) => {
    const { id } = route.params.contato;

    const [name, setName] = useState(route.params.contato.name);
    const [email, setEmail] = useState(route.params.contato.email);
    const [phone, setPhone] = useState(route.params.contato.phone);
    const [avatarUrl] = useState(route.params.contato.avatar_url);

    const apiUrl = 'http://192.168.0.191:8000/contatos';

    const handleUpdateContact = async () => {
        try {
            const novoContato = { name, email, phone, avatar_url: avatarUrl };
            await axios.put(`${apiUrl}/${id}`, novoContato);

            Alert.alert(
                "Sucesso",
                "Contato atualizado com sucesso.",
                [{ text: "OK", onPress: () => navigation.goBack() }],
                { cancelable: false }
            );

        } catch (error) {
            console.error('Erro ao atualizar contato:', error);
            Alert.alert(
                "Erro",
                "Erro ao atualizar contato. Por favor, tente novamente mais tarde.",
                [{ text: "OK" }],
                { cancelable: false }
            );
        }
    };

    const handleDeleteContact = async () => {
        try {
            await axios.delete(`${apiUrl}/${id}`);

            Alert.alert(
                "Sucesso",
                "Contato excluído com sucesso.",
                [{ text: "OK", onPress: () => navigation.goBack() }],
                { cancelable: false }
            );
        } catch (error) {
            console.error('Erro ao excluir contato:', error);
            Alert.alert(
                "Erro",
                "Erro ao excluir contato. Por favor, tente novamente mais tarde.",
                [{ text: "OK" }],
                { cancelable: false }
            );
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Ionicons name="arrow-back-circle-sharp" size={34} color="white" />
                            <Text style={styles.backButtonText}></Text>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>CONTATO</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.inputContainer}>
                        <Text>Nome:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o nome do contato"
                            value={name}
                            onChangeText={setName}
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
                            onChangeText={setEmail}
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
                            value={phone}
                            onChangeText={text => setPhone(text)}
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleUpdateContact}>
                        <Text style={styles.buttonText}>Alterar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonExcluir} onPress={handleDeleteContact}>
                        <Text style={styles.buttonText}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AlteraContatoScreen;