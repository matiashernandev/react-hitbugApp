import React, { useEffect, useState } from "react";
import { getCountries } from "../services/getCountries";

export default function TestTool() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        (async () => {
            /*  const countries = await getCountries();
            setCountries(countries); */
            setCountries(await getCountries());
        })();
    }, []);
    //console.log("🧉 ~ countries", countries);

    return <div>testTool</div>;
}
