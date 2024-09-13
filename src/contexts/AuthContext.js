import { useState, useEffect, createContext } from "react"
import { storageCtrl, userCtrl } from "../api"
import { fn } from "../utils"

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        recoverySession();
    }, [])

    const recoverySession = async () => {
        const token = await storageCtrl.getToken()

        if (!token) {
            logOut();
            setLoading(false);
            return;
        }
        if (fn.hasTokenExpired(token)) {
            logOut();
        } else {
            await login(token);
        }
    }



    const login = async (token) => {
        try {
            await storageCtrl.setToken(token);
            const response = await userCtrl.getMe();
            setUser(response);
            setLoading(false);

        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const logOut = async () => {
        await storageCtrl.removeToken();
        setUser(null)
    };

    const updateUser = (key, value) => {
        setUser((prevState) => ({
            ...prevState,
            [key]: value,
        }))
    }

    const data = {
        user,
        login,
        logOut,
        updateUser,

    }

    if (loading) return true;

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}