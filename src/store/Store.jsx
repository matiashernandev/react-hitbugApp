import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const AppContext = createContext({
    repos: [],
    dataUserGitHub: {},
    dataRepo: {},
    url: "",
    updateUrl: (url) => {},
    updateFilters: (filtro) => {},
    fetchDataWithLogin: () => {},
});

export default function Store({ children }) {
    const [repos, setRepos] = useState();

    const [url, setUrl] = useState(
        `https://api.github.com/users/nkwaaaa/repos`
    );

    const { user, isAuthenticated, isLoading } = useAuth0();

    const [filters, setFilters] = useState("");

    const [dataUserGitHub, setDataUserGitHub] = useState({});

    const [dataRepo, setDataRepo] = useState("");

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
            console.log("ahora", error);
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
        } catch (error) {
            console.log(error);
        }
    }, []);

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
                url,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
