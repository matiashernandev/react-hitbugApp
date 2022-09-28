import React from "react";
import CardUser from "../components/CardUser";
import Loading from "../layout/Loading";

const UserInfo = () => {
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
