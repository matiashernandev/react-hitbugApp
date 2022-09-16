import React from "react";
import { Link } from "react-router-dom";
import ButtonLogin from "./../components/ButtonLogin";

function Login() {
    return (
        <div>
            <div className="container px-4 px-lg-5 my-5  text-dark">
                <div className="text-center">
                    <h1 className="display-4 fw-bolder">Login</h1>
                    <p className="lead fw-normal  mb-0">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Suscipit, hic.
                    </p>
                </div>
            </div>
            <ButtonLogin />
            Esta es la Login
            <Link to="/test">IR A TEST RUTA PROTEGIDA</Link>
        </div>
    );
}

export default Login;
