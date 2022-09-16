import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth0();

    if (!isAuthenticated) {
        Swal.fire("No estás loggeado", "inicia sesión ಠ_ಠ", "error");
        return <Navigate to="/" />;
    }
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return children;
}

export default ProtectedRoute;
