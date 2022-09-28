import React, { useState } from "react";
import { useAppContext } from "../store/Store";

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
        <form
            onSubmit={handleSubmit}
            className="input-group  py-5  container row d-flex justify-content-end"
        >
            <div className="col-12 col-md-3  d-flex justify-content-center ms-5 ">
                <input
                    autoFocus
                    type="text"
                    className="form-control"
                    id="inputUserGh"
                    placeholder="GitHub Username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="btn btn-primary"
                >
                    Search
                </button>
            </div>

            <div className="col-12 col-md-7 d-flex">
                <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Order by"
                    value={sortValue}
                    onChange={(e) => setSortValue(e.target.value)}
                >
                    <option defaultValue={sortValue}>Sort by...</option>
                    <option value="created">Created</option>
                    <option value="updated">Updated</option>
                    <option value="pushed">Pushed</option>
                    <option value="full_name">Full Name</option>
                </select>
                <select
                    className="form-select"
                    id="inputGroupSelect04"
                    aria-label="Order by"
                    value={directionValue}
                    onChange={(e) => setDirectionValue(e.target.value)}
                >
                    <option defaultValue={directionValue}>
                        Sort direction...
                    </option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
                <button
                    onClick={handleOrder}
                    className="btn btn-primary"
                    type="button"
                >
                    Order
                </button>
            </div>
        </form>
    );
}
