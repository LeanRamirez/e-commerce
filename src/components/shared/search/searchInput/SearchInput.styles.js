import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: "#16222b",
        paddingVertical: 10,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    backArrow: {
        position: "absolute",
        left: 10,
        top: 15,
        color: "#fff",
    },
    containerInput: {
        position: "relative",
        alignItems: "center",
        flexDirection: 'row', // Alinea la barra y la flecha horizontalmente
    },
    searchBar: {
        borderRadius: 10,
        backgroundColor: "#fff",
        height: 50, // Ajusta la altura según lo que prefieras
    },
});





