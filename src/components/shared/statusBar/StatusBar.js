import { StatusBar as SatatusBarRN, SafeAreaView } from "react-native";
import { styled } from "./StatusBar.styles"

export function StatusBar({ backgroundColor, ...rest }) {

    const styles = styled(backgroundColor)

    return (
        <>
            <SatatusBarRN backgroundColor={backgroundColor} {...rest} />
            <SafeAreaView style={styles.safeAreaView} />
        </>
    )
}