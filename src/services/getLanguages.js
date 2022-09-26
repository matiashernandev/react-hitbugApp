import { ajax } from "../tools/ajax";

export const getLanguages = async (userrepo) => {
    const optionsRequest = {
        method: "GET",
        url: `https://api.github.com/repos/${userrepo}/languages`,
    };
    return await ajax(optionsRequest);
};
