import { authFetch } from "../lib"
import { ENV } from "../utils"

async function getMe() {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
        const response = await authFetch(url);
        // const params = {
        //     headers: {
        //         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNzI1NzYxNzI4LCJleHAiOjE3MjgzNTM3Mjh9.PW3sqiOcET2Y_MymvgEGCgGmhjsCkZXPJ1XmBVhAol0"
        //     }
        // }

        // const response = await fetch(url, params);

        if (response.status !== 200) throw response;

        return await response.json();

    } catch (error) {
        throw error
    }
}

async function updateUSer(userId, formData) {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        };

        const response = await authFetch(url, params);

        if (response.status !== 200) throw response;

        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const userCtrl = {
    getMe,
    update: updateUSer,
}