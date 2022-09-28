import React from "react";
import { useAppContext } from "../store/Store.jsx";

import CardRepo from "./CardRepo.jsx";
import Loading from "./../layout/Loading";

function ListCardRepo() {
    const store = useAppContext();
    //console.log(store.repos);

    return (
        <div className="container">
            <div className="row">
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
