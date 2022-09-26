import React from "react";
import Tips from "./Tips";
import pato from "../assets/img/pato.webp";
import img from "../assets/img/favicon.webp";

function Login() {
    return (
        <div className="container px-4 px-lg-5 my-5 text-dark text-center text-lg-start">
            <div id="about" className="container-fluid">
                <div className="row  ">
                    <div className="col-sm-12 col-md-8  ">
                        <h2>About</h2>

                        <h4>
                            Con el objetivo de afianzar los temas vistos y de
                            aprender nuevas tecnologías a libre elección; este
                            proyecto "sandbox" fue realizado para la materia
                            Frontend 3 a cargo del profesor Gabriel Morgillo en
                            el cursado del 5to. bimestre de la carrera Certified
                            Tech Developer en Digital House.
                        </h4>
                        <button className="btn  my-3 d-flex  ">
                            <a
                                href="https://www.linkedin.com/in/mha5/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none "
                            >
                                Get in Touch
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="#0A66C2"
                                    className=" ms-2  "
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </a>
                        </button>
                    </div>
                    <div className="col-sm-4">
                        <img className="img-fluid" src={pato} width="" alt="" />
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4  d-none d-md-block text-center m-auto ">
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
