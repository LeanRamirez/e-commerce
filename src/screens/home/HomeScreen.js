import React, { useState, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { Button } from "react-native-paper";
import Toast from 'react-native-root-toast';
import { ProductBanners, } from "../../components/shared"
import { homeBannerCtrl, productCtrl } from "../../api"
import { useAuth } from "../../hooks";
import { Layout } from "../../layouts"
import { GridProducts } from '../../components/shared/GridProducts/GridProducts';

export function HomeScreen() {
    const { logOut } = useAuth();
    const [banners, setBanners] = useState(null);
    const [products, setProducts] = useState(null)

    useEffect(() => {
        getBanners();
        getProducts();
    }, []);

    const getBanners = async () => {
        try {
            const response = await homeBannerCtrl.getAll();
            setBanners(response?.data || null);
        } catch (error) {
            Toast.show("Error al obtener los banners", {
                position: Toast.positions.CENTER
            })
        }
    }

    const getProducts = async () => {
        try {
            const response = await productCtrl.getLastestPublished();
            setProducts(response?.data || [])
        } catch (error) {
            Toast.show("Error al obtener los productos", {
                position: Toast.positions.CENTER
            })
        }
    }

    return (
        <Layout.Basic>
            {banners && <ProductBanners banners={banners} />}
            <GridProducts title="Nuevos productos" products={products} />
        </Layout.Basic>

    );
}
