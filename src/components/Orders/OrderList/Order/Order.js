import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { DateTime } from "luxon"
import { screenName } from "../../../../utils"
import { style } from "./Order.styles"

export function Order({ order }) {

    const data = order.attributes
    const navigation = useNavigation();



    const goToOrder = () => {
        navigation.navigate(screenName.account.order, { id: order.id })
    }

    return (
        <Pressable onPress={goToOrder} style={style.container}>
            <View>
                <Text>
                    <Text style={style.title}>Pedido: </Text>
                    {order.id}
                </Text>
                <Text>
                    <Text style={style.title}>Total: $ </Text>
                    {data.totalPayment}
                </Text>
                <Text>
                    <Text style={style.title}>Fecha de compra:  </Text>
                    {DateTime.fromISO(data.createdAt, { locale: "es" }).toFormat("dd/MM/yyyy")}

                </Text>
            </View>
            <IconButton icon="eye" />
        </Pressable>
    )
}