import React from "react";
import ListCardRepo from "../components/ListCardRepo";
import Form from "../components/Form";

function Repos() {
    return (
        <div className="bg-dark text-secondary container-fluid ">
            <Form />
            <ListCardRepo />
        </div>
    );
}

export default Repos;
