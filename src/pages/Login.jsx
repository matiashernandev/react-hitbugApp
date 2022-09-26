import React from "react";
import ButtonLogin from "./../components/ButtonLogin";
import imgLogin from "../assets/img/fire_IT.gif";

function Login() {
    return (
        <div className="font-monospace container-fluid bg-dark text-secondary  position-fixed start-0 px-4 py-5 text-center vh-100 vw-100">
            <a target="_blank" href="https://youtu.be/1EBfxjSFAxQ">
                <img className="img-fluid" src={imgLogin} alt="Login Image" />
            </a>
            <div className="py-5">
                <div className="d-grid d-sm-flex gap-3 justify-content-sm-center">
                    <h1 className="display-5  fw-bold text-white">Hitbug</h1>
                    <ButtonLogin />
                </div>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-4 mt-2 text-light d-none d-md-block text-center">
                        Proyecto realizado para la materia Frontend 3 a cargo
                        del profesor Gabriel Morgillo de la carrera Certified
                        Tech Developer en Digital House.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
