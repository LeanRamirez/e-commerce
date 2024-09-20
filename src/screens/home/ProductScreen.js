import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { forEach } from "lodash"
import { productCtrl } from "../../api"
import { Layout } from "../../layouts"
import { LoadingScreen, Separator } from "../../components/shared"
import { Product } from "../../components/Product"


export function ProductScreen(props) {
    const { route: {
        params
    } } = props
    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([])

    const productId = params.productId

    useEffect(() => {
        getProduct();
    }, [productId])




    const getProduct = async () => {
        try {
            const response = await productCtrl.getById(productId);
            setProduct({ ...response.data.attributes, id: response.data.id })

            const mainIMage = response.data.attributes.main_image.data.attributes.url;
            const images = response.data.attributes.images.data;

            const arrayImages = [mainIMage]
            forEach(images, (image) => {
                arrayImages.push(image.attributes.url)
            });

            setImages(arrayImages);


        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <Layout.Basic>
                {!product ? (
                    <LoadingScreen text="Cargando Producto" size="large" />
                ) : (
                    <>
                        <Product.Title text={product.title} />
                        <Product.CarouselImages images={images} />
                        <View style={{ padding: 10 }}>
                            <Product.Price price={product.price} discount={product.discount} />
                            <Separator height={30} />
                            <Product.Characteristics text={product.characteristics} />
                            <Separator height={70} />
                        </View>
                    </>
                )}
            </Layout.Basic>

            {product && <Product.BottomBar productId={productId} />}

        </>
    )
}





