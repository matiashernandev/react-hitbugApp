import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import imgDino from "../assets/img/404dino.jpg";
import imgBackgroundCard from "../assets/img/Banner_System_Error.webp";
import { useAppContext } from "../store/Store";

export default function CardUser() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const store = useAppContext();

    console.log(user);
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card">
                    <div className="upper">
                        <img
                            src={imgBackgroundCard}
                            width="400px"
                            className="img-fluid"
                        />
                    </div>

                    <div className="user text-center">
                        <div className="profile">
                            <img
                                src={user?.picture ?? imgDino}
                                className="rounded-circle"
                                width="80"
                            />
                        </div>
                    </div>

                    <div className="mt-5 text-center">
                        <h4 className="mb-0">{user?.name}</h4>
                        <span className="text-muted d-block mb-2">
                            {user?.nickname}
                        </span>

                        <a target="_blank" href={store.dataUserGitHub.html_url}>
                            {" "}
                            <button className="btn btn-primary btn-sm follow">
                                GitHub Page
                            </button>{" "}
                        </a>

                        <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                            <div className="stats">
                                <h6 className="mb-0">Followers</h6>
                                <span>{store.dataUserGitHub.followers}</span>
                            </div>

                            <div className="stats">
                                <h6 className="mb-0">public_repos</h6>
                                <span>{store.dataUserGitHub.public_repos}</span>
                            </div>

                            <div className="stats">
                                <h6 className="mb-0">following</h6>
                                <span>{store.dataUserGitHub.following}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
