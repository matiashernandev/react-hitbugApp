import React from "react";

export default function CardRepo({ repo }) {
    return (
        <div className="card" style={{ width: "18rem", height: "18rem" }}>
            {/*    //TODO arreglar estilo */}
            <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Lenguage: {repo.language ?? "no tiene"}
                    </li>
                    {/*   <li className="list-group-item">
                        Stars: repo.stargazers_count
                    </li>
                    <li className="list-group-item">Watchers</li> */}
                </ul>
                <h6>Description:</h6>
                <p className="card-text">{repo.description ?? "no tiene👀"}</p>
            </div>
            <div className="card-body">
                <a href={repo.html_url} target="_blank" className="card-link">
                    Open on Github
                </a>
                <a href="#" className="card-link">
                    See details
                </a>
            </div>
        </div>
    );
}
