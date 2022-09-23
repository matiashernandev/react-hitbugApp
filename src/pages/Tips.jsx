import React from "react";

function Tips() {
    return (
        <div>
            <div className="  my-5  text-dark">
                <div className="text-center">
                    <h1 className="display-4 fw-bolder">Tips</h1>

                    <div className="list-group">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Antes de empezar a codear. Lean bien todo el
                                enunciado, y separenlo en tareas pequeñas e
                                independientes (pueden mockear data para separar
                                componentes dependientes de data).
                            </li>
                            <li className=" list-group-item text-center ">
                                Pueden dividir las tareas por pantallas o por
                                funcionalidades, o por ambas.
                            </li>
                            <li className="list-group-item text-center">
                                NO empiecen por el login. Necesitamos ver
                                context para que puedan almacenar los datos del
                                usuario de manera “global” y puedan ser
                                consumidos en el resto de componentes sin tener
                                que pasar props para todos lados.
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                La feature de que nadie pueda acceder a la web
                                hasta loggearse es de las más complicadas.
                                Haganla solo si les queda tiempo.
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Pueden usar todas las herramientas que quieran:
                                Librerías de estilos, formularios, etc. Se vale
                                buscar y copiar código de Stack Overflow o de
                                cualquier lugar. La idea es que puedan valerse
                                por ustedes mismos.
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong>
                                    No se traben, si encuentran una solución,
                                    <mark>
                                        aunque tenga malas prácticas, úsenlas
                                    </mark>
                                    . Siempre hay lugar a mejora cuando tengan
                                    todo más resuelto.
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

export default Tips;
