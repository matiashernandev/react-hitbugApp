import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/favicon.png";
import Logout from "./../components/Logout";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid  ">
                <Link class="navbar-brand" to="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        class="d-inline-block align-top "
                        alt=""
                    />
                    Hitbug
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse "
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="profile"
                            >
                                User Info
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/repos">
                                Repos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Logout />
                        </li>
                        <a class="navbar-brand " href="#">
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                class="d-inline-block align-top "
                                alt=""
                            />
                        </a>
                        {/*  <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>
                    {/*        <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
