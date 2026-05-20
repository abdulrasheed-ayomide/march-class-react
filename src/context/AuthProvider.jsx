import AuthContext from "./authContext";
import { privateInstance } from "../api/api";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

export const AuthProvider = ({ children }) => {
    // const name = "John Doe";
    // const email = "Ayo@gmail.com";
    // const [cart, setCart] = useState(0);

    const [user, setUser] = useState();
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const isAuthenticated = Boolean(token)

    const login = ({ user, token }) => {
        setUser(user || null);
        setToken(token || null);

        if (user && token) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user))
        }

        setLoading(false);

    }

    const logOut = () => {
        console.log("Hello world");

        localStorage.removeItem("user");
        localStorage.removeItem("token");

        setUser(null);
        setToken(null);

    }

    const getCurrentUser = async (savedToken) => {
        console.log("Loading........");

        try {
            const response = await privateInstance.get("api/routes/currentUser");
            console.log(response.data.token, "from here.....");

            // if (response) {
            //     navigate("/")
            // }

            if (response.data) {
                setUser(response.data.user)
            }

        } catch (error) {
            console.log(error.response.data.message);
            console.log(error)
            navigate("/login")

        } finally{
            setLoading(false);
        }

    }

    useEffect(() => {
        const savedToken = localStorage.getItem("token")
        const savedUser = localStorage.getItem("user")

        try {

            if (savedToken) {
                setToken(savedToken)
            }
            if (savedUser) {
                const preSavedUser = JSON.parse(savedUser);
                setUser(preSavedUser)
            }

            if (savedToken) {
                getCurrentUser(savedToken)
            }

        } catch (error) {
            console.log(error);

        }

    }, [])

    return (
        //    <AuthContext.Provider value={{name, email, cart, setCart}}>
        <AuthContext.Provider value={{ user, login, logOut, loading, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}