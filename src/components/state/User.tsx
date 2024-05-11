import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogin = () => {
        setUser({
            name: "anh duc",
            email: "sao",
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name is {user?.name}</div>
            <div>user email is</div>
        </div>
    )
}

export default User