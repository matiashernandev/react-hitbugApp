import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
    repos: [],
    updateUrl: (url) => {},
});

export default function Store({ children }) {
    const [repos, setRepos] = useState();

    const [url, setUrl] = useState(
        `https://api.github.com/users/nkwaaaa/repos`
    );

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setRepos(data);

            //console.log(data);
        }

        fetchData();
    }, [url]);

    function updateUrl(url) {
        setUrl(url);
    }

    return (
        <AppContext.Provider
            value={{
                repos,
                updateUrl,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
