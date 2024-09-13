import React from 'react'
import { Alert } from 'react-native'
import { List } from "react-native-paper"
import { useNavigation } from '@react-navigation/native'
import { map } from "lodash"
import { useAuth } from "../../../hooks"
import { accountMenu, appMenu } from "./Menu.data"
import { style } from './Menu.styles'

export function Menu() {
    const navigation = useNavigation();
    const { logOut } = useAuth();




    const alertLogout = () => {
        Alert.alert(
            "Cerrar sesión",
            "¿Estas seguro que quieres salir de tu cuenta?",
            [
                {
                    text: "NO"
                },
                {
                    text: "SI",
                    onPress: logOut,
                }
            ],
            { cancelable: false }
        )
    }
    return (
        <>
            <List.Section >
                <List.Subheader>
                    Mi cuenta
                </List.Subheader>
                {map(accountMenu, (item, index) => (
                    <List.Item
                        key={index}
                        title={item.title}
                        titleStyle={style.titleItem}
                        description={item.description}
                        left={(props) => <List.Icon {...props} icon={item.leftIcon} />}
                        onPress={() => navigation.navigate(item.screen)}
                    />
                ))}
            </List.Section>


            <List.Section >
                <List.Subheader>
                    App
                </List.Subheader>
                {map(appMenu, (item, index) => (
                    <List.Item
                        key={index}
                        title={item.title}
                        titleStyle={style.titleItem}
                        description={item.description}
                        left={(props) => <List.Icon {...props} icon={item.leftIcon} />}
                        onPress={() => navigation.navigate(item.screen)}
                    />
                ))}
            </List.Section>

            <List.Section>
                <List.Item
                    title="Cerrar sesión"
                    titleStyle={style.titleLogoutItem}
                    description="Cerrar esta sesión e iniciar con otra cuenta"
                    left={(props) => <List.Icon {...props} icon="logout" />}
                    onPress={alertLogout}
                />
            </List.Section>
        </>
    )
}