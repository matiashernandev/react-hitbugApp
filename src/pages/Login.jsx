import React from "react";
import { Link } from "react-router-dom";
import ButtonLogin from "./../components/ButtonLogin";

function Login() {
    return (
        <div>
            <ButtonLogin />

            <Link to="/test">TEST RUTA PROTEGIDA</Link>

            <div className="container px-4 px-lg-5 my-5  text-dark">
                <div className="text-center">
                    <h1 className="display-4 fw-bolder">Login</h1>
                    <p className="lead fw-normal  mb-0">TIPS</p>
                    <div className="list-group">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Antes de empezar a codear. Lean bien todo el
                                enunciado, y separenlo en tareas pequeñas e
                                independientes (pueden mockear data para separar
                                compoenentes dependientes de data)
                                <span className="badge bg-primary rounded-pill">
                                    1
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Pueden dividir las tareas por pantallas o por
                                funcionalidades, o por ambas.
                                <span className="badge bg-primary rounded-pill">
                                    1
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                NO empiecen por el login. Necesitamos ver
                                context para que puedan almacenar los datos del
                                usuario de manera “global” y puedan ser
                                consumidos en el resto de componentes sin tener
                                que pasar props para todos lados.
                                <span className="badge bg-primary rounded-pill">
                                    1
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                la feature de que nadie pueda acceder a la web
                                hasta loggearse es de las mas complicadas.
                                Haganla solo si les queda tiempo.
                                <span className="badge bg-primary rounded-pill">
                                    1
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                pueden usar todas las herramientas que quieran:
                                Librerias de estilos, formularios, etc. Se vale
                                buscar y copiar codigo de stack overflow o de
                                cualquier lugar. La idea es que puedan valerse
                                por ustedes mismos.
                                <span className="badge bg-primary rounded-pill">
                                    1
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong>
                                    No se traben, si encuentran una solucion,
                                    <mark>
                                        aunque tenga malas practicas, usenlas
                                    </mark>
                                    . Siempre hay lugar a mejora cuando tengan
                                    todo mas resuelto.
                                </strong>
                                <span className="badge bg-primary rounded-pill">
                                    It's Over 9000!
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
