import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { size, map } from 'lodash'
import { productCtrl, addressCtrl } from '../../../api'
import { useCart, useAuth } from "../../../hooks"
import { Layout } from "../../../layouts"
import { LoadingScreen } from '../../../components/shared'
import { Cart } from "../../../components/Cart"
import { fn } from '../../../utils'
import { style } from "./CartScreen.styles"

export function CartScreen() {
    const [products, setProducts] = useState(null);
    const [totalPayment, setTotalPayment] = useState(null);
    const [addresses, setAddresses] = useState(null)
    const [selectedAddress, setSelectedAddress] = useState(null)
    const { user } = useAuth();
    const { cart } = useCart();

    useEffect(() => {
        getProduct();
    }, [cart]);

    useEffect(() => {
        loadAddresses()
    }, [])


    const getProduct = async () => {
        const productsTemp = [];
        let totalPaymentTemp = 0;

        for await (const item of cart) {
            const response = await productCtrl.getById(item.id);
            const data = response.data.attributes;

            productsTemp.push({ ...data, ...item });

            const priceProduct = fn.calcPrice(data.price, data.discount);
            totalPaymentTemp += priceProduct * item.quantity
        }

        setProducts(productsTemp);
        setTotalPayment(totalPaymentTemp);

    };

    const loadAddresses = async () => {
        const response = await addressCtrl.getAll(user.id);
        setAddresses(response.data)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <Layout.Cart>
                {!products ? (
                    <LoadingScreen text="Cargando el carrito" />
                ) : size(products) === 0 ? (
                    <Cart.Empty />
                ) : (
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1 }}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
                    >
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            keyboardShouldPersistTaps="handled"
                        >

                            <View style={style.container} >
                                <Cart.ProductList
                                    products={products}
                                />
                                <Cart.AddressList addresses={addresses} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} />
                                {selectedAddress && (
                                    <Cart.Pyment
                                        totalPayment={totalPayment}
                                        selectedAddress={selectedAddress}
                                        products={products}
                                    />
                                )}

                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                )}
            </Layout.Cart>
        </ScrollView>
    )
}
