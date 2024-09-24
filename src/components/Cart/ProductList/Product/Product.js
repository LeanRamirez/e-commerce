import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { Button, IconButton } from "react-native-paper"
import { fn } from "../../../../utils"
import { useCart } from "../../../../hooks"
import { style } from "./Product.styles"

export function Product({ product }) {
    const { deleteProduct, increaseProduct, decreaseProduct } = useCart();
    const mainImage = product.main_image.data.attributes.url
    const onDeleteProduct = () => deleteProduct(product.id)
    const onincreaseProduct = () => increaseProduct(product.id)
    const onDecreaseProduct = () => decreaseProduct(product.id)

    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image source={{ uri: mainImage }} style={style.image} />
            </View>

            <View style={style.infoContainer}>
                <View>
                    <Text
                        style={style.name}
                        numberOfLines={3}
                        ellipsizeMode="tail"
                    >
                        {product.title}
                    </Text>
                    <View style={style.prices}>
                        <Text style={style.currentPrice}>
                            $ {fn.calcPrice(product.price, product.discount)} c/u
                        </Text>
                    </View>
                </View>

                <View style={style.actions}>
                    <View style={style.selectQuantity}>
                        <IconButton
                            icon="plus"
                            iconColor="#fff"
                            size={19}
                            style={style.btnquantity}
                            onPress={onincreaseProduct}
                        />
                        <TextInput
                            value={product.quantity.toString()}
                            style={style.inputQuantity}
                        />
                        <IconButton
                            icon="minus"
                            iconColor="#fff"
                            size={19}
                            style={style.btnquantity}
                            onPress={onDecreaseProduct}
                        />
                    </View>
                    <Button mode='contained' style={style.btnDelete} onPress={onDeleteProduct}>Eliminar</Button>

                </View>
            </View>
        </View>
    )
}