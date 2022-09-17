import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAppContext } from "../store/Store.jsx";

export default function ButtonModal({ repo }) {
    const store = useAppContext();
    const [repoName, setRepoName] = useState("");
    /*  const [dataRepo, setDataRepo] = useState(""); */
    const [datosRepositorio, setDatosRepositorio] = useState({});

    const showModal = ({ name, description, size }) => {
        Swal.fire({
            title: "Detalle Repo",
            html:
                `<li>nombre: ${name}</li>` +
                `<li>descripcion: ${description}</li>` +
                `<li>creacion${size}</li>` +
                `<li>ultima actualizacion${size}</li>` +
                `<li>ultimo push${size}</li>`,

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
