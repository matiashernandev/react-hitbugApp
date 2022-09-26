import { ajax } from "../tools/ajax";

export const getLanguages = async (user, repo) => {
    const optionsRequest = {
        method: "GET",
        url: `https://api.github.com/repos/${user}/${repo}/languages`,
    };
    return await ajax(optionsRequest);
};
