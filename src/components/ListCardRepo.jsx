import React, { useEffect, useState } from "react";
import { useAppContext } from "../store/Store.jsx";

import CardRepo from "./CardRepo.jsx";
import Loading from "./../layout/Loading";

function ListCardRepo() {
    const store = useAppContext();
    //console.log(store.repos);

    /*   const repos = store.repos; */

    /*     console.log(store.repos); */

    /*    if (store.repos === "error") {
        return <h1>Error</h1>;
    } */

    return (
        <div className="container">
            <div className="row">
                {/* {repos.length === 0 && <Loading />}
                {repos.length > 0 &&
                    repos.map((repo) => (
                        <div key={repo.id} className="col-md-3 mb-3 ">
                            <CardRepo repo={repo} />
                        </div>
                    ))} */}

                {store.repos?.map((repo) => (
                    <div key={repo.id} className="col-md-3 mb-3 ">
                        <CardRepo repo={repo} />
                    </div>
                )) ?? <Loading />}
            </div>
        </div>
    );
}

export default ListCardRepo;

{
    /* <div className="container">
<div className="row">
    {store.repos?.map((repo) => (
        <div key={repo.id} className="col-md-4">
            <CardRepo repo={repo} />
        </div>
    ))}
</div>
</div> */
}
