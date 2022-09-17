import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/img/favicon.png";
import Logout from "./../components/Logout";
import { useAppContext } from "../store/Store";

import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const store = useAppContext();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const { isLoading, user, isAuthenticated } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <nav className="navbar  navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid  ">
                <Link className="navbar-brand" to="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mx-2 "
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
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* TODO medio mersa el collapse */}
                <div
                    className={`${
                        isNavCollapsed ? "collapse" : ""
                    } navbar-collapse `}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link "
                                aria-current="page"
                                to="/userinfo"
                            >
                                User Info
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/repos">
                                Repos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Logout />
                        </li>
                        <a className="navbar-brand " href="#">
                            {isAuthenticated && (
                                <img
                                    src={user.picture}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top "
                                    alt="logo"
                                />
                            )}
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
