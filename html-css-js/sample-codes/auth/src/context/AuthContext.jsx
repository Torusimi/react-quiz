import { createContext, useState, useContext } from "react"

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const login = (username, password) => {
        if (username === 'admin' && password === '1234') {
            setUser({ name: 'admin' })
        }
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}