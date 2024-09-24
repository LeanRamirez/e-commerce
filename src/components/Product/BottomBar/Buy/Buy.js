import React from 'react'
import { Button } from "react-native-paper"
import Toast from 'react-native-root-toast'
import { useCart } from '../../../../hooks'
import { style } from "./Buy.styles"
import { add } from 'lodash'

export function Buy({ productId }) {
    const { addCart } = useCart();

    const addProductCart = async () => {
        try {
            await addCart(productId)
            Toast.show("Producto agregado al carrito", {
                position: Toast.positions.CENTER
            })
        } catch (error) {
            Toast.show("Error al agregar producto al carrito", {
                position: Toast.positions.CENTER
            }
            )
        }
    }
    return (
        <Button
            mode='contained'
            contentStyle={style.btnBuyContent}
            labelStyle={style.btnLabel}
            style={style.btn}
            onPress={addProductCart}
        >
            Añadir al carrito
        </Button>
    )
}