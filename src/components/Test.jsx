import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function test() {
    const { isLoading, user } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return <div>TEST</div>;
}

export default test;
