import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function ButtonLogin() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleClick = () => {
        loginWithRedirect();
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/userinfo");
        }
    }, [isAuthenticated]);

    return (
        <button
            className="btn btn-primary  btn-lg px-4 fw-bold"
            onClick={handleClick}
        >
            Login
        </button>
    );
}

export default ButtonLogin;
