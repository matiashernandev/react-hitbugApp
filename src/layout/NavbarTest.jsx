import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/favicon.png";
import Logout from "./../components/Logout";

function NavbarTest() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
            </a>
            <button
                className="custom-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
                aria-expanded={!isNavCollapsed ? true : false}
                onClick={handleNavCollapse}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Disabled
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarTest;
