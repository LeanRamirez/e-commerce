import { size } from "lodash"
import { authFetch } from "../lib"
import { ENV } from "../utils"

async function addWishList(userId, productId) {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLISTS}`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    user: userId,
                    product: productId
                },
            }),
        };

        const response = await authFetch(url, params);

        if (response.status !== 200) throw response;

        return await response.json();
    } catch (error) {
        throw error
    }
};

async function checkWishList(userId, productId) {
    try {
        const filterUser = `filters[user][id][$eq][0]=${userId}`;
        const filterProduct = `filters[product][id][$eq][1]=${productId}`;
        const filters = `${filterUser}&${filterProduct}`;

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLISTS}?${filters}`;

        const response = await authFetch(url);

        if (response.status !== 200) throw response;
        const result = await response.json()

        if (size(result.data) === 0) {
            return false
        }

        return result.data[0]
    } catch (error) {
        throw error
    }
};

async function deleteWishList(userId, productId) {
    try {
        const dataFound = await checkWishList(userId, productId);
        if (dataFound) {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLISTS}/${dataFound.id}`;
            const params = { method: "DELETE" }

            const response = await authFetch(url, params)
            if (response.status !== 200) throw response;

            return true;
        }
    } catch (error) {
        throw error
    }
};

async function getAllProductsWishList(userId) {
    try {
        const userFilters = `filters[user][id][$eq]=${userId}`;
        const populate = "populate[0]=product&populate[1]=product.main_image"
        const filters = `${userFilters}&${populate}`;
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLISTS}?${filters}`;

        const response = await authFetch(url);
        if (response.status !== 200) throw response;

        return await response.json();
    } catch (error) {
        throw error
    }
}


export const wishListCtrl = {
    add: addWishList,
    check: checkWishList,
    delete: deleteWishList,
    getAllProducts: getAllProductsWishList,
}