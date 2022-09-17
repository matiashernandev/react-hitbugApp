import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAppContext } from "../store/Store.jsx";

export default function ButtonModal({ repo }) {
    const store = useAppContext();
    const [repoName, setRepoName] = useState("");
    /*  const [dataRepo, setDataRepo] = useState(""); */
    const [datosRepositorio, setDatosRepositorio] = useState({});

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
        Swal.fire({
            title: "Detalle Repo",
            html:
                `<li>nombre: ${name}</li>` +
                `<li>descripcion: ${description}</li>` +
                `<li>tamaño: ${size}</li>` +
                `<a href="https://youtu.be/sAzlWScHTc4?t=28" target="_blank" ><li>Mostrar cantidad de seguidores(?</li></a>` +
                `<li>Cantidad forks: ${forks}</li>` +
                `<li>Estrellas: ${stargazers_count}</li>` +
                `<a href="${clone_url}" target="_blank" ><li>Link al repo</li></a>` +
                `<li>fecha creación: ${created_at}</li>` +
                `<li>ultima actualizacion: ${updated_at}</li>` +
                `<li>ultimo push: ${pushed_at}</li>`,

            footer: "lenguajes..................",

            showClass: {
                popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
        });
    };

    const handleClick = async (e) => {
        console.log(repo.owner.login);

        const response = await axios.get(
            `https://api.github.com/repos/${repo.owner.login}/${repo.name}`
        );
        const dataRepo = response.data;

        //console.log(repo.name);

        // setDatosRepositorio(store.dataRepo);
        //store.updateRepositorio(repo.name);
        // console.log(dataRepo.description);
        //console.log(dataRepo.size);
        // console.log(dataRepo.language);
        // console.log(datosRepositorio);
        // console.log(store.dataRepo.name);

        /*  setRepoName(repoName); */

        showModal(dataRepo);
    };

    /*   const repoFetch = async () => {
        const response = await axios(
            `https://api.github.com/repos/nkwaaaa/botoneraDH`
        );
        setDataRepo(response.data);
        // console.log(response.data);
    }; */

    /*   useEffect(() => {
        try {
            repoFetch(repoName);
        } catch (error) {
            console.log(error);
        }
    }, [repoName]); */
    return (
        <button className="btn btn-primary" onClick={handleClick}>
            modal
        </button>
    );
}
