import React from "react";

import ButtonModal from "./ButtonModal";

export default function CardRepo({ repo }) {
    //console.log(repo);

    return (
        <div className="card container d-f h-100 p-0 m-0">
            <div className="card-body d-flex flex-column justify-content-between  ">
                <h5 className="card-title">{repo.name}</h5>
                <h6>Description:</h6>
                <p className="card-text ">{repo.description ?? "no tiene👀"}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Lenguage: {repo.language ?? "no tiene"}
                    </li>
                    <li className="list-group-item">
                        Fecha subida: {repo.updated_at.substring(0, 10)}
                    </li>
                    <li className="list-group-item">
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
