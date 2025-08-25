import React, { useState } from "react";
import "./Login.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login to your account</h2>
                <form>
                    <input type="email" placeholder="Email Id" required />
                    <div className="password-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            👁
                        </span>
                    </div>

                    <p className="forgot">Forgot Password?</p>

                    <button type="submit" className="login-btn">LOGIN</button>

                    <p className="signup-text">
                        Not Registered? <span className="signup-link">Sign Up</span>
                    </p>

                    <p className="or-text">Or continue with social account</p>

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
