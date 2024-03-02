import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { ListItem, Avatar } from 'react-native-elements';

const Contatos = ({ navigation }) => {

    const list = [
        {
            name: 'Enio Batalha',
            avatar_url: 'https://cdn.icon-icons.com/icons2/3399/PNG/512/contact_icon_214941.png',
            email: 'eniobatalha@batalha.com',
            phone: '+8199744-1105'
        },
        {
            name: 'Paloma Batalha',
            avatar_url: 'https://cdn.icon-icons.com/icons2/3399/PNG/512/contact_icon_214941.png',
            email: 'palomabatalha@batalha.com',
            phone: '+8199573-7881'
        },
        {
            name: 'Athena Batalha',
            avatar_url: 'https://cdn.icon-icons.com/icons2/3399/PNG/512/contact_icon_214941.png',
            email: 'athenabatalha@batalha.com',
            phone: '+8198765-4321'
        },
        {
            name: 'Apolo Batalha',
            avatar_url: 'https://cdn.icon-icons.com/icons2/3399/PNG/512/contact_icon_214941.png',
            email: 'apolobatalha@batalha.com',
            phone: '+8198765-4321'
        },
    ];

    // Função para navegar para a tela de edição de contato
    const navigateToEditContact = (contato) => {
        navigation.navigate('AlteraContato', { contato });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>LISTA DE CONTATOS</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NovoContato')} style={styles.addButton}>
                    <FontAwesome5 name="plus-circle" size={34} color="white" />
                </TouchableOpacity>
            </View>
            {
                list.map((contato, i) => (
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        textAlign: "center",
        flex: 1,
    },
    addButton: {
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Contatos;