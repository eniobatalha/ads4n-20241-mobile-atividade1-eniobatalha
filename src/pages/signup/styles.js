import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        paddingVertical: 120,
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
        height: 40, 
        width: 300, 
    },
    button: {
        backgroundColor: "#4882c2",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        width: 300,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    },
});
