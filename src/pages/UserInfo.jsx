import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const UserInfo = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    /*  if (!isAuthenticated) {
        return (
            <>
                <h1>no estás logeado amigo</h1>
                <Link to="/">A home</Link>
            </>
        );
    } */

    return <div>useInfo</div>;
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
