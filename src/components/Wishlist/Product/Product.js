import React, { useState } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { Button, IconButton } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import { wishListCtrl } from '../../../api'
import { useAuth } from '../../../hooks'
import { fn, screenName } from "../../../utils"
import { style } from "./Product.styles"

export function Product({ product, onReload }) {
    const navigation = useNavigation()
    const { user } = useAuth()

    const productInfo = product.attributes;
    const [loading, setLoading] = useState(false)

    const goToProduct = () => {
        navigation.navigate(screenName.home.product, {
            productId: product.id
        })
    }

    const deleteFavorite = async () => {
        setLoading(true)
        await wishListCtrl.delete(user.id, product.id);
        onReload()
        setLoading(false)
    }

    return (
        <View style={style.container}>
            <View style={style.containerImage} >
                <Image source={{ uri: productInfo.main_image.data.attributes.url }}
                    style={style.image} />
            </View>
            <View style={style.info}>
                <View>
                    <Text style={style.name} numberOfLines={3} ellipsizeMode='tail'>
                        {productInfo.title}
                    </Text>
                    <View style={style.price}>
                        <Text style={style.currentPrice}>
                            $ {fn.calcPrice(productInfo.price, productInfo.discount)}
                        </Text>
                        {productInfo.discount && (
                            <Text style={style.oldPrice}>
                                $ {productInfo.price}
                            </Text>
                        )}
                    </View>
                </View>
                <View style={style.actions}>
                    <Button
                        style={style.btnGoToProduct}
                        mode='contained'
                        onPress={goToProduct}
                    >
                        Ver Telefono
                    </Button>
                    <IconButton
                        icon="close"
                        iconColor='#fff'
                        style={style.btnDelete}
                        onPress={deleteFavorite}
                    />
                </View>

            </View>
            {loading && (
                <View style={style.loading}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            )}

        </View>
    )
}