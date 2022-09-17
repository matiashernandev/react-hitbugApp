import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Test() {
    const { isLoading, user } = useAuth0();
    const palabra = "sdfasfsadfas";

    return palabra;
}

export default Test;
