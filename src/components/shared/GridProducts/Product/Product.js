import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { screenName } from "../../../../utils"
import { style } from "./Product.styles"

export function Product({ product }) {
    const navigation = useNavigation();
    const mainImage = product.main_image.data.attributes.url



    const goToProduct = () => {
        navigation.navigate(screenName.home.product, { productId: product.id })
    }
    return (
        <TouchableWithoutFeedback onPress={goToProduct}>
            <View style={style.container}>
                <View style={style.product}>
                    <Image source={{ uri: mainImage }} style={style.image} />
                    <Text style={style.name} numberOfLines={1} ellipsizeMode='tail'>{product.title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

