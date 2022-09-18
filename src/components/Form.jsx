import React, { useState } from "react";
import { useAppContext } from "../store/Store";
import Swal from "sweetalert2";

export default function Form() {
    const store = useAppContext();

    const [user, setUser] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [directionValue, setDirectionValue] = useState("");

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            store.updateUrl(user);
        } catch (error) {
            console.log(error);
        }
    };

    const handleOrder = () => {
        //console.log("ordernando");
        store.updateFilters({ sort: sortValue, direction: directionValue });
        //console.log("sort value essss;", sortValue);
        //console.log("directiio value essss", directionValue);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="input-group mb-3">
                <div className="col-auto">
                    <input
                        type="text"
                        className="form-control"
                        id="inputUserGh"
                        placeholder="GitHub Username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button
                        type="submit"
                        onSubmit={handleSubmit}
                        className="btn btn-primary mb-3"
                    >
                        Search
                    </button>
                </div>
                <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    value={sortValue}
                    onChange={(e) => setSortValue(e.target.value)}
                >
                    <option defaultValue={sortValue}>Choose...</option>
                    <option value="created">Created</option>
                    <option value="updated">Updated</option>
                    <option value="pushed">Pushed</option>
                    <option value="full_name">Full Name</option>
                </select>

                <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                    value={directionValue}
                    onChange={(e) => setDirectionValue(e.target.value)}
                >
                    <option defaultValue={directionValue}>Choose...</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
                <button
                    onClick={handleOrder}
                    className="btn btn-outline-secondary"
                    type="button"
                >
                    Order
                </button>
            </form>
        </div>
    );
}
