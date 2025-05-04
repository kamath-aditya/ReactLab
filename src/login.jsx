import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    
    const handleLogin = (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        
        if (username === "admin" && password === "admin") {
            setLoggedIn(true);
        } else {
            setError("Invalid credentials");
            setLoggedIn(false);
        }
    };

    return (
        <div>
            <h2>Login Website</h2>
            {loggedIn ? (
                <div>
                    <h3>Welcome Admin</h3>
                    <button type="submit" onClick={()=>setLoggedIn(false)}>SignOut</button>
                </div>
            ):(
                <form onSubmit={handleLogin} >
                    <div style={{margin:'5px'}}>
                        <label>Username: </label>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div style={{margin:'5px'}}>
                        <label>Password: </label>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div style={{margin:'5px'}}>
                        <button type="submit">Login</button>
                    </div>
                    {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
                </form>
            )}
        </div>
    );
}

export default Login;
