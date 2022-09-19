import React from "react";

import ButtonModal from "./ButtonModal";

export default function CardRepo({ repo }) {
    console.log(repo);

    return (
        <div className="card container bg-dark text-white border border-primary d-f h-100 p-0 m-0">
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
                <ul className="list-group   list-group-flush">
                    <li className="list-group-item text-bg-dark">
                        Lenguage: {repo.language ?? "no tiene"}
                    </li>
                    <li className="list-group-item border-0 text-bg-dark ">
                        Fecha subida: {repo.updated_at.substring(0, 10)}
                    </li>
                    <li className="list-group-item text-bg-dark">
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
