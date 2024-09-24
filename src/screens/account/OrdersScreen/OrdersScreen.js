import React, { useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Toast from 'react-native-root-toast'
import { size } from 'lodash'
import { orderCtrl } from "../../../api"
import { useAuth } from "../../../hooks"
import { Layout } from "../../../layouts"
import { LoadingScreen } from "../../../components/shared"
import { OrderList } from "../../../components/Orders"
import { style } from "./OrdersScreen.style"


export function OrdersScreen() {
    const [orders, setOrders] = useState(null);
    const { user } = useAuth();

    useFocusEffect(
        useCallback(() => {
            getOrders();
        }, [])
    )

    const getOrders = async () => {
        try {
            const response = await orderCtrl.getAll(user.id)
            setOrders(response.data);
        } catch (error) {
            Toast.show("Error al obtener los pedidos", {
                position: Toast.positions.CENTER
            })
        }
    }
    return (
        <Layout.Basic hideSearch>
            <View style={style.container}>
                {!orders ? (
                    <LoadingScreen text="Cargando pedidos" />
                ) : size(orders) === 0 ? (
                    <Text style={style.noOrders}>No tienes pedidos</Text>
                ) : (
                    <>
                        <Text style={style.title}>Mis pedidos</Text>
                        <OrderList orders={orders} />
                    </>
                )}
            </View>
        </Layout.Basic>

    )
}