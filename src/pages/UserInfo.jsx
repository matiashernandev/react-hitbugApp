import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CardUser from "../components/CardUser";
import Loading from "../layout/Loading";

const UserInfo = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="container-fluid position-fixed vh-100 bg-dark text-dark">
                <div className="text-center">
                    <h1 className="display-4 fw-bolder text-white ">
                        User Info
                    </h1>
                </div>
                <CardUser />
            </div>
        </div>
    );
};

export default UserInfo;
