import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Test() {
    const { isLoading, user } = useAuth0();

    return (
        <form className="container-fluid row row-cols-lg-auto g-3 align-items-center">
            <div className="col-12">
                <label
                    className="visually-hidden"
                    for="inlineFormInputGroupUsername"
                >
                    Username
                </label>
                <div className="input-group">
                    <div className="input-group-text">@</div>
                    <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername"
                        placeholder="Username"
                    />
                </div>
            </div>

            <div className="col-12">
                <label className="visually-hidden" for="inlineFormSelectPref">
                    Preference
                </label>
                <select className="select">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                </select>
            </div>

            <div className="col-12">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                    />
                    <label className="form-check-label" for="inlineFormCheck">
                        Remember me
                    </label>
                </div>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Test;
