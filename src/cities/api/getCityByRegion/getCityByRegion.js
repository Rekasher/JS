import {apikey} from "../../cities.js";

const getCityByRegion = async (region) => {
    const dataInfoLink = `https://api.countrylayer.com/v2/region/${region}?access_key=${apikey}`;

    console.log(dataInfoLink);

    return await fetch(dataInfoLink)
        .then(res => res.json())
        .catch(err => console.error(err));
}

export {getCityByRegion}