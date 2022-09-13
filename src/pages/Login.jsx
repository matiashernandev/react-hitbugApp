import React from "react";
import { Link } from "react-router-dom";
import ButtonLogin from "./../components/ButtonLogin";

function Login() {
    return (
        <div>
            <ButtonLogin />
            Esta es la Login
            <Link to="profile">IR Profile</Link>
        </div>
    );
}

export default Login;
