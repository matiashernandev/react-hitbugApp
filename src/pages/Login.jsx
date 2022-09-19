import React from "react";
import { Link } from "react-router-dom";
import ButtonLogin from "./../components/ButtonLogin";
import imgLogin from "../assets/img/fire_IT.gif";

function Login() {
    return (
        <div>
            {/*     <Link to="/test">TEST RUTA PROTEGIDA</Link> */}

            <div className="bg-dark text-secondary position-fixed px-4 py-5 text-center vh-100 vw-100">
                <img
                    className="d-block mx-auto "
                    src={imgLogin}
                    alt="Login Image"
                    width="auto"
                    height="auto"
                ></img>
                <div className="py-5">
                    <div className="d-grid d-sm-flex gap-3 justify-content-sm-center">
                        <h1 className="display-5  fw-bold text-white">
                            Hitbug
                        </h1>
                        <ButtonLogin />
                    </div>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-4 mt-2 text-light">
                            Proyecto realizado para la materia Frontend 3 a
                            cargo del profesor Gabriel Morgi de la carrera
                            Cerfied Tech Developer en Digital House.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
