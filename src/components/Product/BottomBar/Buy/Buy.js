import React from 'react'
import { Button } from "react-native-paper"
import { style } from "./Buy.styles"

export function Buy({ productId }) {
    return (
        <Button
            mode='contained'
            contentStyle={style.btnBuyContent}
            labelStyle={style.btnLabel}
            style={style.btn}
        >
            Añadir al carrito
        </Button>
    )
}