import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TestNesCss from "./TestNesCss";
import TestTyped from "./TestTyped";

import { RotatingLines } from "react-loader-spinner";

function Test() {
    const { isLoading, user } = useAuth0();

    return (
        <div className="container-fluid bg-dark vh-100 position-fixed  d-flex justify-content-center align-align-items-center ">
            <RotatingLines
                className=""
                strokeColor="blue"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    );
}

export default Test;
