import React, { useEffect, useState } from "react";
import { useAppContext } from "../store/Store.jsx";

import CardRepo from "./CardRepo.jsx";

function ListCardRepo() {
    const store = useAppContext();

    return (
        <div className="container">
            <div className="row">
                {store.repos?.map((repo) => (
                    <div key={repo.id} className="col-md-3 mb-3 ">
                        <CardRepo repo={repo} />
                    </div>
                ))}
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
