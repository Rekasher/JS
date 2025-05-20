import {apikey} from "../../cities.js";

const getAllCities = async () => {
    const dataInfoLink = `https://api.countrylayer.com/v2/all?access_key=${apikey}`;

    return await fetch(dataInfoLink)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export {getAllCities}

