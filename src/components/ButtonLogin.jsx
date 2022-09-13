import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function ButtonLogin() {
    const { loginWithRedirect } = useAuth0();
    const handleClick = (e) => {
        loginWithRedirect();
    };
    return <button onClick={handleClick}>login</button>;
}

export default ButtonLogin;
