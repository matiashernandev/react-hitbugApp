import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import CardUser from "../components/CardUser";
import { useAppContext } from "../store/Store";
import Loading from "../layout/Loading";

const UserInfo = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const store = useAppContext();
    const [dataUserGit, setDataUserGit] = useState("");

    if (isLoading) {
        return <Loading />;
    }
    /* 
    if (!isAuthenticated) {
        return (
            <>
                <h1>no estás logeado amigo</h1>
                <Link to="/">A home</Link>
            </>
        );
    } */

    return (
        <div>
            <div className="container-fluid vh-100 bg-dark text-dark">
                <div className="text-center">
                    <h1 className="display-4 fw-bolder text-white p-3 ">
                        User Info
                    </h1>
                    {/*  <p className="lead fw-normal  mb-0">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptatum, enim corrupti. Tempora deserunt
                        aperiam iusto sunt voluptatibus, officia deleniti quae.
                    </p>
                    <h1>nombre desde api gh {store.dataUserGitHub.name} </h1> */}
                </div>
                <CardUser />
            </div>
        </div>
    );
};

//Todo para autenticar
/*  isAuthenticated && (
            <div>
                user info
            </div>
                ) */

/*  <img src={user.picture} alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p> */

export default UserInfo;
