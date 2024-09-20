// import React, { useEffect, useState } from 'react'
// import { IconButton } from "react-native-paper"
// import Toast from 'react-native-root-toast'
// import { wishListCtrl } from "../../../../api"
// import { useAuth } from "../../../../hooks"
// import { style } from "./Favorite.styles"

// export function Favorite({ productId }) {
//     const { user } = useAuth()

//     const [loading, setLoading] = useState(false)
//     const [hasWishList, setHasWishList] = useState(undefined);

//     useEffect(() => {
//         checkWishList()
//     }, [productId])

//     const checkWishList = async () => {
//         try {
//             const response = await wishListCtrl.check(user.id, productId)
//             setHasWishList(response)
//         } catch (error) {
//             setHasWishList(false)
//         }
//     }

//     const addWishList = async () => {
//         try {
//             setLoading(true);
//             await wishListCtrl.add(user.id, productId)
//             setHasWishList(true)
//         } catch (error) {

//             Toast.show("Erros al agregar producto a favoritos", {
//                 position: Toast.positions.CENTER
//             })
//         }
//         setLoading(false)
//     };

//     const deleteWishList = async () => {
//         try {
//             setLoading(true);
//             // Cambia el estado antes de la eliminación
//             setHasWishList(false);
//             await wishListCtrl.delete(user.id, productId);
//             Toast.show("Producto eliminado de favoritos", {
//                 position: Toast.positions.CENTER
//             });
//         } catch (error) {
//             // Si hay un error, vuelve a poner el estado en "true"
//             setHasWishList(true);
//             Toast.show("Error al eliminar de favoritos", {
//                 position: Toast.positions.CENTER
//             });
//         } finally {
//             setLoading(false);
//         }
//     }

//     if (hasWishList === undefined) return null;

//     return (
//         <IconButton
//             icon="heart"
//             style={style.iconButton}
//             size={30}
//             iconColor={hasWishList ? "#e74c3c" : "#fff"}
//             onPress={hasWishList ? deleteWishList : addWishList}
//             disabled={loading}
//         />
//     )
// }

import React, { useEffect, useState } from 'react';
import { IconButton } from "react-native-paper";
import Toast from 'react-native-root-toast';
import { wishListCtrl } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { style } from "./Favorite.styles";

export function Favorite({ productId }) {
    const { user } = useAuth();

    const [loading, setLoading] = useState(false);
    const [hasWishList, setHasWishList] = useState(undefined);

    useEffect(() => {
        checkWishList();
    }, [productId]);

    const checkWishList = async () => {
        try {
            const response = await wishListCtrl.check(user.id, productId);
            setHasWishList(response);
        } catch (error) {
            setHasWishList(false);
        }
    };

    const addWishList = async () => {
        try {
            setLoading(true);
            await wishListCtrl.add(user.id, productId);
            setHasWishList(true);
        } catch (error) {
            Toast.show("Error al agregar producto a favoritos", {
                position: Toast.positions.CENTER
            });
        } finally {
            setLoading(false);
        }
    };

    const deleteWishList = async () => {
        try {
            setLoading(true);
            await wishListCtrl.delete(user.id, productId);
            setHasWishList(false); // Actualiza el estado inmediatamente
        } catch (error) {
            setHasWishList(true); // Si ocurre un error, revertimos el estado
            Toast.show("Error al eliminar de favoritos", {
                position: Toast.positions.CENTER
            });
        } finally {
            setLoading(false);
        }
    };

    if (hasWishList === undefined) return null;

    return (
        <IconButton
            icon="heart"
            style={style.iconButton}
            size={30}
            iconColor={hasWishList ? "#e74c3c" : "#fff"}
            onPress={hasWishList ? deleteWishList : addWishList}
            disabled={loading}
        />
    );
}
