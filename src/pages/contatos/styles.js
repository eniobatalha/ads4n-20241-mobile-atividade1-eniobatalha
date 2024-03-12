import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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