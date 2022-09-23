import React from "react";
import Tips from "./Tips";
import pato from "../assets/img/pato.webp";
import img from "../assets/img/favicon.webp";

function Login() {
    return (
        <div className="container px-4 px-lg-5 my-5 text-dark">
            <div id="about" className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>About</h2>

                        <h4>
                            Con el objetivo de afianzar los temas vistos y de
                            aprender nuevas tecnologías a libre elección; este
                            proyecto fue realizado en el cursado del 5to.
                            bimestre para la materia Frontend 3 a cargo del
                            profesor Gabriel Morgillo de la carrera Cerfied Tech
                            Developer en Digital House.
                        </h4>
                        <a
                            href="https://www.linkedin.com/in/mha5/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn btn-dark my-4">
                                Get in Touch
                            </button>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <img src={pato} width="400px" alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4 text-center m-auto ">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-sm-8">
                        <h2>Tecnologías</h2>
                        <ul className="list-unstyled fs-5">
                            <li>
                                Se utilizó
                                <span className="fst-italic">
                                    {" "}
                                    Vite + React
                                </span>{" "}
                                para el desarrollo de este proyecto.
                            </li>
                            <li>
                                Se implementó el sistema de logueo con la
                                librería
                                <span className="fst-italic"> Auth0</span>.
                            </li>
                            <li>
                                Para los estilos se utilizó
                                <span className="fst-italic">
                                    {" "}
                                    Bootstrap v5
                                </span>
                                .
                            </li>
                            <li>
                                El estado global fue implementado con
                                <span className="fst-italic"> useContext</span>.
                            </li>
                            <li>
                                El sistema de ruteo con{" "}
                                <span className="fst-italic">
                                    React Router v6
                                </span>
                                .
                            </li>
                        </ul>

                        {/*  <p>
                            <strong>Más comentarios:</strong>Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p> */}
                    </div>
                </div>
            </div>
            <Tips />
        </div>
    );
}

export default Login;
