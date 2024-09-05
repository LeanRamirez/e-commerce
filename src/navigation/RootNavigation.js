import { AuthScreen } from "../screens/auth"
import { AppNavigation } from "./AppNavigation"


export function RootNavigation() {
    const user = true
    return user ? <AppNavigation /> : <AuthScreen />
}