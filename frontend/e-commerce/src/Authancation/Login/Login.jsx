import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../../utils";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [msg, setMsg] = useState();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/login",
                form,
                { withCredentials: true }
            );

            setMsg(res.data.msg);

            if (res.data.success) {
                localStorage.setItem("user", JSON.stringify(res.data.user));
                navigate("/");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login to your account</h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email Id"
                        required
                        name="email"
                        onChange={handleChange}
                    />

                    <div className="password-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                            name="password"
                            onChange={handleChange}
                        />

                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            👁
                        </span>
                    </div>

                    <button type="submit" className="login-btn">
                        LOGIN
                    </button>

                    <p className="signup-text">
                        Not Registered?{" "}
                        <span className="signup-link">
                            <Link to="/register">Register</Link>
                        </span>
                    </p>

                    <p className="or-text">{msg}</p>

                    <button type="button" className="google-btn">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                            alt="Google"
                        />
                        LOGIN WITH GOOGLE
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
