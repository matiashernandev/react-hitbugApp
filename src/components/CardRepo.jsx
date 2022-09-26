import React, { useEffect, useState } from "react";

import ButtonModal from "./ButtonModal";
//import { getLanguages } from "./../services/getLanguages";

export default function CardRepo({ repo }) {
    //console.log(repo);

    /*  const [languages, setLanguages] = useState([]); */

    //traer lenguajes F
    /*   useEffect(() => {
        const aux = getLanguages(repo.full_name);
        console.log(aux);

        const total = Object.values(aux).reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        const parsedLanguages = Object.entries(aux).map(([key, value]) => {
            return {
                name: key,
                percentage: (value / total) * 100,
            };
        });
        setLanguages(parsedLanguages);

        return () => {};
    }, []);
 */
    return (
        <div className="card container bg-dark text-white border border-primary  h-100 p-0 m-0">
            <div className="card-body d-flex flex-column justify-content-between  ">
                <h5 className="card-title text-nowrap">
                    {repo.name}
                    {repo.fork ? (
                        <span className="badge bg-primary ps-2 ms-2 end-0  ">
                            forked
                        </span>
                    ) : (
                        ""
                    )}
                </h5>

                <h6>Description:</h6>
                <p className="card-text ">{repo.description ?? "no tiene👀"}</p>
                <ul className="list-group    list-group-flush">
                    <li className="list-group-item py-0 text-bg-dark">
                        Lenguage: {repo.language ?? "no tiene"}
                    </li>
                    <li className="list-group-item py-0 text-bg-dark ">
                        Fecha subida: {repo.updated_at.substring(0, 10)}
                    </li>
                    <li className="list-group-item py-0 text-bg-dark">
                        Estrellas: {repo.stargazers_count}
                    </li>
                </ul>
                <div className="list-group ">
                    <a
                        className="card-link p-lg-2 text-center"
                        href={repo.html_url}
                        target="_blank"
                    >
                        Open on Github
                    </a>
                    <ButtonModal repo={repo} />
                </div>
            </div>
        </div>
    );
}
