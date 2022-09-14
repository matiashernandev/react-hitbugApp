import React, { useEffect, useState } from "react";

import CardRepo from "./CardRepo.jsx";

function ListCardRepo() {
    const [repos, setRepos] = useState();
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState(
        `https://api.github.com/users/nkwaaaa/repos`
    );

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setRepos(data);
            setLoading(false);
            //console.log(data);
        }

        fetchData();
    }, [url]);

    return (
        <div className="container">
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <>
                    <div className="row">
                        {repos?.map((repo) => (
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
