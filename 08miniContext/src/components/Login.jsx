import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        // prevent page from refreshing
        e.preventDefault();
        username:'...'
        setUser({ username, password })
    };

    

    return (
        <div className="flex justify-between flex-col">
            <h2> Login Page</h2>
            <input
                className="w-52 text-3xl border-3 border-blue-500 rounded-md bg-pink-300 font-bold  shadow-2xl mb-1.5"
                type="text"
                placeholder="UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
                className="w-52 border-3 border-blue-500 rounded-md bg-pink-300 font-bold  shadow-2xl mb-1.5"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            ></input>

            <button
                className="w-52 text-3xl border-3 border-blue-500 rounded-md bg-blue-300 font-bold  shadow-2xl mb-1.5"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}

export default Login;
