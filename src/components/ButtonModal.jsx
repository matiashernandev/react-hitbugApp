import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useAppContext } from "../store/Store.jsx";

export default function ButtonModal({ repo }) {
    const store = useAppContext();

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
            title: "Detalle Repo",
            html:
                `<li>nombre: ${name}</li>` +
                `<li>descripcion: ${description}</li>` +
                `<li>tamaño: ${size}</li>` +
                `<a href="https://youtu.be/sAzlWScHTc4?t=28" target="_blank" ><li>Mostrar cantidad de seguidores(?</li></a>` +
                `<li>Cantidad forks: ${forks}</li>` +
                `<li>Estrellas: ${stargazers_count}</li>` +
                `<a href="${clone_url}" target="_blank" ><li>Link al repo</li></a>` +
                `<li>fecha creación: ${created_at.substring(0, 10)}</li>` +
                `<li>ultima actualizacion: ${updated_at.substring(
                    0,
                    10
                )}</li>` +
                `<li>ultimo push: ${pushed_at.substring(0, 10)}</li>`,

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
        //  console.log(repo.owner.login);

        const response = await axios.get(
            `https://api.github.com/repos/${repo.owner.login}/${repo.name}`
        );
        const dataRepo = response.data;

        showModal(dataRepo);
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            modal
        </button>
    );
}
