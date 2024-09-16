import React from 'react'
import { View, Text, Alert } from 'react-native'
import { Button } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import Toast from 'react-native-root-toast'
import { screenName } from "../../../../utils"
import { addressCtrl } from "../../../../api"
import { style } from "./Address.styles"

export function Address({ address, addressId, onReload }) {
    const navigation = useNavigation();

    const goToUpdateAddress = () => {
        navigation.navigate(screenName.account.addEditAddress, {
            addressId,
        })
    };

    const deleteAddressAlert = () => {
        Alert.alert(
            "Eliminar dirección",
            `¿Estas seguro que quieres eliminar la dirección (${address.title})?`,
            [
                {
                    text: "NO",
                },
                {
                    text: "SI",
                    onPress: deleteAddress
                },
            ],
            { cancelable: false }
        )
    }

    const deleteAddress = async () => {
        try {
            await addressCtrl.delete(addressId);
            onReload();
        } catch (error) {
            Toast.show("Error al eliminar la dirección", {
                position: Toast.positions.CENTER
            })
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>{address.title}</Text>
            <Text>{address.name}</Text>
            <Text>{address.address}</Text>
            <Text>{address.state}, {address.city}, {address.postal_code}</Text>
            <Text>{address.country}</Text>
            <Text>Numero de telefono: {address.phone}</Text>

            <View style={style.actions}>
                <Button mode='contained' onPress={goToUpdateAddress}>Editar</Button>
                <Button mode='contained' onPress={deleteAddressAlert}>Eliminar</Button>
            </View>
        </View>
    )
}


