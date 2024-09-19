import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;


export const style = StyleSheet.create({
    container: {
        position: "relative",
    },
    carousel: {
        width: width,
        height: 200
    },
    dotContainer: {
        position: "absolute",
        bottom: -20,
        width: "100%"
    },
    dot: {
        backgroundColor: "#fff",

    }
});