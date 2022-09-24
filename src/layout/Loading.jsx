import React from "react";
import { RotatingTriangles } from "react-loader-spinner";

function Loading() {
    return (
        <div className="container-fluid position-fixed start-0 bg-dark vh-100  d-flex justify-content-center align-align-items-center ">
            <RotatingTriangles
                className=" "
                colors={["#ffde20", "#ffde20", "#ffde20"]}
                visible={true}
                height="125"
                width="125"
                ariaLabel="rotating-triangels-loading"
                wrapperStyle={{ position: "relative", top: "25vh" }}
                wrapperClass="rotating-triangels-wrapper "
            />
            <p className="position-absolute font-monospace fs-1 text-white  bottom-50 ">
                LOADING
            </p>
        </div>
    );
}

export default Loading;
