import AsyncStorage from "@react-native-async-storage/async-storage"
import { map, forEach } from "lodash"
import { ENV } from "../utils"

async function getAllProducts() {
    const response = await AsyncStorage.getItem(ENV.STORAGE.CART);

    if (!response) {
        return [];
    } else {
        return JSON.parse(response)
    }
};

async function addCart(productId) {

    const products = await getAllProducts()
    const objIndex = products.findIndex((product) => product.id === productId)
    if (objIndex < 0) {
        products.push({ id: productId, quantity: 1 });
    } else {
        const product = products[objIndex]
        products[objIndex].quantity = product.quantity + 1
    }


    await AsyncStorage.setItem(ENV.STORAGE.CART, JSON.stringify(products))
}

async function count() {
    const products = await getAllProducts();

    let count = 0;
    forEach(products, (product) => {
        count += product.quantity;
    })
    return count
}

async function deleteProduct(productId) {
    const product = await getAllProducts();
    const updateProducts = product.filter((product) => product.id !== productId);
    await AsyncStorage.setItem(ENV.STORAGE.CART, JSON.stringify(updateProducts))
}

async function increaseProduct(productId) {
    try {
        const products = await getAllProducts();
        map(products, (product) => {
            if (product.id === productId) {
                return (product.quantity += 1)
            }
        });
        await AsyncStorage.setItem(ENV.STORAGE.CART, JSON.stringify(products))
    } catch (error) {
        throw error
    }
}

async function decreaseProduct(productId) {
    try {
        let isDelete = false;
        const products = await getAllProducts();

        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                if (product.quantity > 1) {
                    product.quantity -= 1; // Decrementa la cantidad
                } else {
                    isDelete = true; // Marca para eliminar
                    return null; // Devuelve null para eliminar
                }
            }
            return product;
        }).filter((product) => product !== null); // Elimina productos marcados con null

        if (isDelete) {
            await deleteProduct(productId); // Si la cantidad era 1, elimina el producto
        } else {
            await AsyncStorage.setItem(ENV.STORAGE.CART, JSON.stringify(updatedProducts));
        }

    } catch (error) {
        throw error;
    }
}

async function deleteAll() {
    AsyncStorage.removeItem(ENV.STORAGE.CART)
}


export const cartCtrl = {
    getAll: getAllProducts,
    add: addCart,
    count,
    delete: deleteProduct,
    increaseProduct,
    decreaseProduct,
    deleteAll,
}