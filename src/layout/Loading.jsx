import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { RotatingLines, RotatingTriangles } from "react-loader-spinner";

function Loading() {
    return (
        <div className="container">
            <div className="container-fluid bg-dark vh-100 d-flex justify-content-center align-align-items-center ">
                {/*           <RotatingLines
                    className=""
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                /> */}
                <RotatingTriangles
                    className="mt-4 "
                    colors={["#ffde20", "#ffde20", "#ffde20"]}
                    visible={true}
                    height="125"
                    width="125"
                    ariaLabel="rotating-triangels-loading"
                    wrapperStyle={{ position: "relative", top: "25vh" }}
                    wrapperClass="rotating-triangels-wrapper "
                />
                <p class="position-absolute fs-1 text-white  bottom-50 ">
                    LOADING
                </p>
            </div>
        </div>
    );
}

export default Loading;
