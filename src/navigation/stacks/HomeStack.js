import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen, ProductScreen, SearchScreen } from "../../screens/home"
import { screenName } from "../../utils"

const Stack = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={screenName.home.home} component={HomeScreen} />
            <Stack.Screen name={screenName.home.product} component={ProductScreen} />
            <Stack.Screen name={screenName.home.search} component={SearchScreen} />
        </Stack.Navigator>
    )
}