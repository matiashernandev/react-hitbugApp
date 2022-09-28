import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext({
    repos: [],
    dataUserGitHub: {},
    dataRepo: {},
    updateUrl: (url) => {},
    updateFilters: (filtro) => {},
    fetchDataWithLogin: () => {},
});

export default function Store({ children }) {
    const [repos, setRepos] = useState();

    const [url, setUrl] = useState(
        `https://api.github.com/users/gabymorgi/repos`
    );

    const [dataUserGitHub, setDataUserGitHub] = useState({});

    const [dataRepo, setDataRepo] = useState("");

    const [filters, setFilters] = useState("");

    /* ------------------------------- traer repos ------------------------------ */

    const fetchData = async () => {
        try {
            const response = await axios.get(url, {
                params: filters
                    ? {
                          sort: filters.sort,
                          direction: filters.direction,
                      }
                    : undefined,
            });
            setRepos(response.data);
        } catch (error) {
            console.log("Error no manejado 🙂", error);
        }
    };

    useEffect(() => {
        try {
            fetchData(filters);
        } catch (error) {
            console.log(error);
        }
    }, [url, filters]);

    /* -------------------------------------------------------------------------- */

    const fetchDataWithLogin = async () => {
        const response = await axios.get(
            "https://api.github.com/users/nkwaaaa"
        );

        // console.log(response.data);
        setDataUserGitHub(response.data);

        return response.data;
    };

    useEffect(() => {
        try {
            fetchDataWithLogin();
            //console.log("fetchdatawithlogin");
        } catch (error) {
            console.log(error);
        }
    }, []);
    /* -------------------------------------------------------------------------- */

    function updateUrl(url) {
        setUrl(`https://api.github.com/users/${url}/repos`);
    }

    function updateFilters(filtro) {
        setFilters(filtro);
        // console.log("desde update", filtro);
    }

    //console.log(repos);
    //console.log(dataUserGitHub);

    return (
        <AppContext.Provider
            value={{
                repos,
                updateUrl,
                updateFilters,
                fetchDataWithLogin,
                dataUserGitHub,
                dataRepo,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
