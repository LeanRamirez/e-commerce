import { authFetch } from "../lib"
import { ENV } from "../utils"

async function payment(token, userId, products, addressShipping) {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENT_ORDER}`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token,
                products,
                userId,
                addressShipping
            })
        };

        const response = await authFetch(url, params);

        return response;

    } catch (error) {
        throw error
    }
}

export const orderCtrl = {
    payment
}