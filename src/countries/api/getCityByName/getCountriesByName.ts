import {apikey} from "../../cities";

const getCountriesByName = async (name: string) => {
    const dataInfoLink = `https://api.countrylayer.com/v2/name/${name}?access_key=${apikey}&fullText=true`;

    return await fetch(dataInfoLink)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export {getCountriesByName}