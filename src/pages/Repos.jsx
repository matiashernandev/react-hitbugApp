import React from "react";
import ListCardRepo from "../components/ListCardRepo";
import { useAppContext } from "../store/Store";

function Repos() {
    const store = useAppContext();
    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    onClick={() =>
                        store.updateUrl(
                            "https://api.github.com/users/gabymorgi/repos"
                        )
                    }
                    type="button"
                    className="btn btn-primary"
                >
                    Left
                </button>
                <button type="button" className="btn btn-primary">
                    Middle
                </button>
                <button type="button" className="btn btn-primary">
                    Right
                </button>
            </div>
            <ListCardRepo />
        </div>
    );
}

export default Repos;
