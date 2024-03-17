import React, { useState, useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView } from "react-native"; // Importe ScrollView
import { FontAwesome5 } from '@expo/vector-icons';
import { ListItem, Avatar } from 'react-native-elements';
import axios from 'axios';
import { styles } from './styles.js';
import { SimpleLineIcons } from '@expo/vector-icons';

const Contatos = ({ navigation }) => {
    const [contatos, setContatos] = useState([]);

    const apiUrl = 'http://192.168.0.191:8000/contatos';

    useEffect(() => {
        fetchContatos();
    }, []);

    async function fetchContatos() {
        try {
            const response = await axios.get(apiUrl);
            const contatosData = response.data;
            setContatos(contatosData);
            // Teste para verificar se os contatos foram carregados
            //console.log('Contatos:', contatosData);
        } catch (error) {
            console.error('Erro ao buscar contatos:', error);
        }
    }

    // Função para navegar para a tela de edição de contato
    const navigateToEditContact = (contato) => {
        navigation.navigate('AlteraContato', { contato });
    };

    // hook useFocusEffect para recarregar os dados sempre que a tela for focada. 
    useFocusEffect(
        React.useCallback(() => {
            fetchContatos();
        }, [])
    );

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                    <SimpleLineIcons name="logout" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>LISTA DE CONTATOS</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NovoContato')} style={styles.addButton}>
                    <FontAwesome5 name="plus-circle" size={34} color="white" />
                </TouchableOpacity>
            </View>

            <ScrollView>
                {
                    contatos.map((contato, i) => (
                        <TouchableOpacity key={i} onPress={() => navigateToEditContact(contato)}>
                            <ListItem bottomDivider>
                                <Avatar source={{ uri: contato.avatar_url }} />
                                <ListItem.Content>
                                    <ListItem.Title>{contato.name}</ListItem.Title>
                                    <ListItem.Title>{contato.email}</ListItem.Title>
                                    <ListItem.Subtitle>{contato.phone}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    );
};

export default Contatos;
