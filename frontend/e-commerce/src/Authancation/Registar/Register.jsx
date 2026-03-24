import React, { useState } from "react";
import "../Login/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import API from "../../utils";

function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [msg, setMsg] = useState();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/signup",
                form,
                { withCredentials: true }
            );

            setMsg(res.data.msg);

            if (res.data.success) {
                localStorage.setItem("user", JSON.stringify(res.data.user)); navigate("/");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Register to your account</h2>

                <form onSubmit={handleSignup}>

                    <input
                        type="text"
                        placeholder="Name"
                        required
                        name="name"
                        onChange={handleChange}
                    />

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
                        REGISTER
                    </button>

                    <p className="signup-text">
                        Already Registered?{" "}
                        <span className="signup-link">
                            <Link to="/login">Login</Link>
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
}

export default Register;
