import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-root-toast'
import { orderCtrl } from "../../../api"
import { Layout } from "../../../layouts"
import { ProductList, Address } from "../../../components/Orders"
import { LoadingScreen, Separator } from "../../../components/shared"
import { style } from "./OrderScreen.styles"

export function OrderScreen(props) {
    const {
        route: { params } } = props;
    const [order, setOrder] = useState(null);
    const navigation = useNavigation();
    const orderId = params.id;

    useEffect(() => {
        navigation.setOptions({ title: `Pedido: ${orderId}` })
        getOrderById()
    }, [orderId]);

    const getOrderById = async () => {
        try {
            const response = await orderCtrl.getById(orderId)
            setOrder(response);
        } catch (error) {
            Toast.show("Error al cargar los pedidos", {
                position: Toast.positions.CENTER
            })
        }
    }

    return (
        <Layout.Basic hideSearch>
            <View style={style.container}>
                {!order ? (
                    <LoadingScreen text="Cargando pedido" />
                ) : (
                    <View>
                        <Separator height={20} />
                        <Text style={style.title}>Productos: </Text>

                        <ProductList products={order.products} />

                        <Separator height={50} />
                        <Text style={style.title}>Dirección de envío: </Text>
                        <Separator height={20} />
                        <Address address={order.addressShipping.attributes} />

                        <Text style={style.totalPayment}>
                            Total: $ {order?.totalPayment}
                        </Text>
                    </View>
                )}
            </View>
        </Layout.Basic>
    )
}
