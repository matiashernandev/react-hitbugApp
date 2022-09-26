import axios from "axios";
import Swal from "sweetalert2";
import { useAppContext } from "../store/Store.jsx";
import { getLanguages } from "./../services/getLanguages";
import { useState } from "react";

export default function ButtonModal({ repo }) {
    const store = useAppContext();
    console.log(repo.languages_url);

    const [languages, setLanguages] = useState([]);

    const showModal = ({
        name,
        description,
        size,
        clone_url,
        created_at,
        updated_at,
        pushed_at,
        stargazers_count,
        forks,
    }) => {
        //  console.log(created_at.substring(0, 10));
        Swal.fire({
            title: "Details Repo",
            html:
                `<h1>${name}</h1>` +
                `<h3>Description: ${description}</h3>` +
                `<li>Size: ${size}</li>` +
                `<a href="https://youtu.be/sAzlWScHTc4?t=28" target="_blank" ><li>Mostrar cantidad de seguidores(?</li></a>` +
                `<li>Forks count: ${forks}</li>` +
                `<li>Stars: ${stargazers_count}</li>` +
                `<a href="${clone_url}" target="_blank" ><li>GitHub</li></a>` +
                `<li>Created at: ${created_at.substring(0, 10)}</li>` +
                `<li>Updated at: ${updated_at.substring(0, 10)}</li>` +
                `<li>Pushed at: ${pushed_at.substring(0, 10)}</li>`,

            footer: languages[0],

            showClass: {
                popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
        });
    };

    const handleClick = async (e) => {
        //  console.log(repo.owner.login);

        //traer lenguajes F
        /*  const aux = await getLanguages(repo.owner.login, repo.name);

        const total = Object.values(aux).reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        const parsedLanguages = Object.entries(aux).map(([key, value]) => {
            return {
                name: key,
                percentage: (value / total) * 100,
            };
        });
        setLanguages(parsedLanguages); */

        const response = await axios.get(
            `https://api.github.com/repos/${repo.owner.login}/${repo.name}`
        );
        const dataRepo = response.data;

        showModal(dataRepo);
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            See Details
        </button>
    );
}
