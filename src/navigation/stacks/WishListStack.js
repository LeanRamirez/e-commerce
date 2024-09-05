import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WishListScreen } from "../../screens/wishList"
import { screenName } from "../../utils"

const Stack = createNativeStackNavigator();

export function WishListStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screenName.wishList.wishList} component={WishListScreen} />
        </Stack.Navigator>
    )
}