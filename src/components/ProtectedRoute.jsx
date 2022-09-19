import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth0();

    if (!isAuthenticated) {
        /*  Swal.fire({
            title: "No estás loggeado",
            text: "Loggeate ಠ_ಠ",

            width: 600,

            color: "#716add",
            icon: "error",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/src/assets/img/dancerrr.gif")
              left center
              no-repeat
            `,
        }); */
        Swal.fire({
            title: "No estás logueado",
            color: "#716add",
            text: "Logueate ಠ_ಠ",
            background: "#282c34",
            imageUrl: "/src/assets/img/dancerrr.gif",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "RRR image",
        });

        return <Navigate to="/" />;
    }
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return children;
}

export default ProtectedRoute;
