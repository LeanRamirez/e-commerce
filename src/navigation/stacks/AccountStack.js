import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
    AccountScreen,
    ChangeEmailScreen,
    ChangeNameScreen,
    ChangePasswordScreen,
    ChangeUserNameScreen,
    OrderScreen,
    OrdersScreen,
    AddEditAddressScreen,
    AddressesScreen
} from "../../screens/account"
import { screenName } from "../../utils"

const Stack = createNativeStackNavigator();


export function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screenName.account.account}
                component={AccountScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={screenName.account.changeName}
                component={ChangeNameScreen}
                options={{ title: "Cambiar nombre y apellido" }}
            />
            <Stack.Screen
                name={screenName.account.changeEmail}
                component={ChangeEmailScreen}
                options={{ title: "Cambiar Email" }}
            />
            <Stack.Screen
                name={screenName.account.changeUserName}
                component={ChangeUserNameScreen}
                options={{ title: "Cambiar nombre de usuario" }}
            />
            <Stack.Screen
                name={screenName.account.changePassword}
                component={ChangePasswordScreen}
                options={{ title: "Cambiar contraseña" }}
            />
            <Stack.Screen
                name={screenName.account.addresses}
                component={AddressesScreen}
                options={{ title: "Mis direcciones" }}
            />
            <Stack.Screen
                name={screenName.account.addEditAddress}
                component={AddEditAddressScreen}
                options={{ title: "Cambiar dirección" }}
            />
            <Stack.Screen
                name={screenName.account.orders}
                component={OrdersScreen}
                options={{ title: "Mis pedidos" }}
            />
            <Stack.Screen
                name={screenName.account.order}
                component={OrderScreen}
                options={{ title: "", presentation: "modal" }}
            />
        </Stack.Navigator>
    )
}