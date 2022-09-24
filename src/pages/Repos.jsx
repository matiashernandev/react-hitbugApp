import React, { useState } from "react";
import ListCardRepo from "../components/ListCardRepo";
import { useAppContext } from "../store/Store";
import Swal from "sweetalert2";
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
