import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window")

export const style = StyleSheet.create({
    image: {
        width,
        height: width,
        resizeMode: "cover"
    },
    dotContainer: {
        bottom: 15
    }
});