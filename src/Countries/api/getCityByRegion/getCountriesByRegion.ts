import {apikey} from "../../Countries";

const getCountriesByRegion = async (region: string) => {
    const dataInfoLink = `https://api.countrylayer.com/v2/region/${region}?access_key=${apikey}`;

    return await fetch(dataInfoLink)
        .then((response) => response.json())
        .catch(err => console.log(err));
}

export {getCountriesByRegion}