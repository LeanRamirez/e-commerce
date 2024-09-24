import React from 'react'
import { View, Text } from 'react-native'
import { map } from 'lodash'
import { Order } from "./Order"
import { style } from "./OrderList.styles"

export function OrderList({ orders }) {
    return (
        <View style={style.container}>
            {map(orders, (order) => (
                <Order key={order.id} order={order} />
            ))}
        </View>
    )
}