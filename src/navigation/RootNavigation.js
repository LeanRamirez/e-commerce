import { AuthScreen } from "../screens/auth"
import { AppNavigation } from "./AppNavigation"


export function RootNavigation() {
    const user = null;
    return user ? <AppNavigation /> : <AuthScreen />
}