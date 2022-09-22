import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "./../layout/Loading";

function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }
    if (!isAuthenticated) {
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

    return children;
}

export default ProtectedRoute;
