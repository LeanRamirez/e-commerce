import { ScrollView } from "react-native";
import { StatusBar } from "../components/shared"

export function CartLayout({ children }) {

    return (
        <>
            <StatusBar backgroundColor="#16222b" barStyle="light-content" />
            <ScrollView>{children}</ScrollView>
        </>
    )
}