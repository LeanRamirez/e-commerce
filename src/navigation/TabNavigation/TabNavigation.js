import { View } from "react-native"
import { Badge } from "react-native-paper"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AwesomeIcon from "react-native-vector-icons/FontAwesome"
import { useCart } from "../../hooks"
import { style } from "./TabNavigation.styles"
import { AuthScreen } from "../../screens/auth"
import { screenName } from "../../utils"
import { HomeStack, WishListStack, CartStack, AccountStack } from "../stacks"

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
            tabBarActiveTintColor: "#000",
            tabBarStyle: style.tabBar,
            tabBarShowLabel: false,
            headerShown: false
        })}>
            <Tab.Screen
                name={screenName.home.root}
                component={HomeStack}
                options={{ title: "Inicio" }}
            />
            <Tab.Screen
                name={screenName.wishList.root}
                component={WishListStack}
                options={{ title: "Lista de deseos" }}
            />
            <Tab.Screen
                name={screenName.cart.root}
                component={CartStack}
                options={{ title: "Carrito" }}
            />
            <Tab.Screen
                name={screenName.account.root}
                component={AccountStack}
                options={{ title: "Mi cuenta" }}
            />
        </Tab.Navigator>
    )
}


function setIcon(route, routeStatus) {
    const { totalProduct } = useCart()

    let iconName = "";
    let color = "#fff";

    if (routeStatus.focused) {
        color = "#0098d3"
    }

    if (route.name === screenName.home.root) {
        iconName = "home"
    }
    if (route.name === screenName.wishList.root) {
        iconName = "heart"
    }
    if (route.name === screenName.account.root) {
        iconName = "user"
    }
    if (route.name === screenName.cart.root) {
        return (
            <View>
                <AwesomeIcon name="shopping-cart" color={color} style={style.icon} />
                {totalProduct > 0 && (
                    <Badge style={style.totalCart}>{totalProduct}</Badge>
                )}
            </View>
        )
    }

    return <AwesomeIcon name={iconName} color={color} style={style.icon} />
}