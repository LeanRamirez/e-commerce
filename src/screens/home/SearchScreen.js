import React, { useEffect, useState } from 'react'
import Toast from 'react-native-root-toast';
import { size } from "lodash"
import { productCtrl } from "../../api"
import { useSearch } from "../../hooks"
import { Layout } from "../../layouts"
import { LoadingScreen, Search, GridProducts } from "../../components/shared"

export function SearchScreen() {
    const [product, setProduct] = useState(null);
    const { searchText } = useSearch();

    useEffect(() => {
        getProductSearch();
    }, [searchText])


    const getProductSearch = async () => {
        try {
            // Eliminar espacios innecesarios
            const cleanSearchText = searchText.trim();

            const response = await productCtrl.search(cleanSearchText);
            setProduct(response.data);
            console.log(response.data);
            console.log(response.meta.pagination.total);
        } catch (error) {
            Toast.show("Error al obtener los productos de la búsqueda", {
                position: Toast.positions.CENTER,
            });
        }
    };

    return (
        <Layout.Basic>
            {!product ? (
                <LoadingScreen Text="" Buscando productos />
            ) : size(product) === 0 ? (
                <Search.ResultNotFound searchText={searchText} />
            ) : (
                <GridProducts products={product} />
            )}
        </Layout.Basic>
    )
}
