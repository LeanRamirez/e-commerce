import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CartScreen } from "../../screens/cart"
import { screenName } from "../../utils"

const Stack = createNativeStackNavigator();


export function CartStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screenName.cart.cart} component={CartScreen} />
        </Stack.Navigator>
    )
}