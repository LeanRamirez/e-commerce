import { storageCtrl } from "../api/storage"
import { fn } from "../utils"

export async function authFetch(url, params) {
    const token = await storageCtrl.getToken();

    const logOut = async () => {
        await storageCtrl.removeToken();
    }

    if (!token) {
        logOut();
    } else {
        if (fn.hasTokenExpired(token)) {
            logOut();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                return await fetch(url, paramsTemp)
            } catch (error) {
                throw error
            }
        }
    }
}