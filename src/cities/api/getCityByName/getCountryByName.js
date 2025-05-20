import {apikey} from "../../cities.js";

const getCountryByName = async (name) => {
    const dataInfoLink = `https://api.countrylayer.com/v2/name/${name}?access_key=${apikey}&fullText=true`

    console.log(dataInfoLink);

    return await fetch(dataInfoLink)
        .then(res => res.json())
        .catch(err => console.error(err));

}

export {getCountryByName}