import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TestNesCss from "./TestNesCss";
import TestTyped from "./TestTyped";

import { RotatingLines, RotatingTriangles } from "react-loader-spinner";
import Loading from "../layout/Loading";
import TestTool from "../tools/TestTool";

function Test() {
    const { isLoading, user } = useAuth0();

    return (
        <div className="container-fluid bg-dark vh-100 position-fixed  d-flex justify-content-center align-align-items-center ">
            {/*           <RotatingLines
                className=""
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            /> */}
            {/* <Loading /> */}
            <TestTool />
        </div>
    );
}

export default Test;
