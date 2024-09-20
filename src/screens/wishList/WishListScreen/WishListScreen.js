import React, { useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import { useFocusEffect } from "@react-navigation/native"
import Toast from 'react-native-root-toast';
import { forEach, size } from 'lodash';
import { wishListCtrl } from "../../../api"
import { useAuth } from "../../../hooks"
import { Layout } from "../../../layouts"
import { LoadingScreen } from "../../../components/shared"
import { WishlistList } from "../../../components/Wishlist"
import { style } from './WishListScreen.styles';

export function WishListScreen() {
    const { user } = useAuth()
    const [products, setProducts] = useState(null);
    const [reload, setReload] = useState(false)



    useFocusEffect(
        useCallback(() => {
            getProductWishList()
        }, [reload])
    );

    const onReload = () => setReload(prevState => !prevState)

    const getProductWishList = async () => {
        try {
            const response = await wishListCtrl.getAllProducts(user.id)


            const productTemp = []
            forEach(response.data, (item) => {

                productTemp.push(item.attributes.product)
            });


            setProducts(productTemp)


        } catch (error) {
            Toast.show("Error al obtener la lista de favoritos", {
                position: Toast.positions.CENTER
            })
        }
    }
    return (
        <Layout.Basic >
            {!products ? (
                <LoadingScreen text={"Cargando lista"} />
            ) : size(products) === 0 ? (
                <View style={style.container}>
                    <Text style={style.title}>Lista de favoritos</Text>
                    <Text>Todavia no tienes ningún favorito</Text>

                </View>
            ) : (
                <WishlistList
                    title="Lista de favoritos"
                    products={products}
                    onReload={onReload}
                />
            )}
        </Layout.Basic>
    )
}

