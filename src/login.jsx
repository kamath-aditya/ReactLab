// Create a react code for simple login 
// 

import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            setLoggedIn(true);
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div>
        <h2>Login Website</h2>
        <form>
            <div>
                <label>Username : </label>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password : </label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
            {error && <div>{error}</div>}
            {loggedIn && <div>Logged in successfully</div>}
        </form>
        </div>
    );
}

export default Login;