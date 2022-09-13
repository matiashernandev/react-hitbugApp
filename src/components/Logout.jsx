import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Logout() {
    const { logout } = useAuth0();
    const handleClick = (e) => {
        logout({ returnTo: window.location.origin });
    };
    return (
        <Link className="nav-link" onClick={handleClick} to="/">
            Logout
        </Link>
    );
}

export default Logout;
