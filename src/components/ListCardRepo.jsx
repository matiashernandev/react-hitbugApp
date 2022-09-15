import React, { useEffect, useState } from "react";
import { useAppContext } from "../store/Store.jsx";

import CardRepo from "./CardRepo.jsx";

function ListCardRepo() {
    const store = useAppContext();
    //  const [repos, setRepos] = useState(store.repos);
    const [loading, setLoading] = useState(false);
    //todo arreglar el loading

    /*  useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setRepos(data);
            setLoading(false);
            //console.log(data);
        }

        fetchData();
    }, [url]); */

    return (
        <div className="container">
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <div className="row">
                        {store.repos?.map((repo) => (
                            <div key={repo.id} className="col-md-4">
                                <CardRepo repo={repo} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default ListCardRepo;
