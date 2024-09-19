import React, { useState } from 'react'
import { View, Image, Pressable, Dimensions } from 'react-native'
import Carousel, { Pagination } from "react-native-snap-carousel"
import { useNavigation } from "@react-navigation/native"
import { size } from "lodash"
import { screenName } from "../../../utils"
import { style } from "./ProductBanners.styles"

const width = Dimensions.get("window").width;

export function ProductBanners({ banners }) {
    const [bannerActive, setBannerActive] = useState(0)
    const navigation = useNavigation();

    const goToProduct = (id) => {
        navigation.navigate(screenName.home.product, { productId: id })
    }

    const renderItem = ({ item }) => {
        const urlImage = item.attributes.banner.data.attributes.url

        return (
            <Pressable
                onPress={() => goToProduct(item.id)}
            >
                <Image
                    source={{ uri: urlImage }}
                    style={style.carousel}
                />
            </Pressable>
        )
    }
    return (
        <View style={style.container}>
            <Carousel
                layout='default'
                data={banners}
                sliderWidth={width}
                itemWidth={width}
                renderItem={renderItem}
                onSnapToItem={(index) => setBannerActive(index)}
            />
            <Pagination
                dotsLength={size(banners)}
                activeDotIndex={bannerActive}
                inactiveDotOpacity={0.6}
                inactiveDotScale={0.6}
                containerStyle={style.dotContainer}
                dotStyle={style.dot}
                inactiveDotStyle={style.dot}
            />
        </View>
    )
}