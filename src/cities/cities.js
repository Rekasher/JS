import {getAllCities} from "./api/getAllCities/getAllCities.js";
import {getCountryByName} from "./api/getCityByName/getCountryByName.js";

import dotenv from "dotenv";
import {getCityByRegion} from "./api/getCityByRegion/getCityByRegion.js";
dotenv.config();

export const apikey = process.env.APIKEY;

console.log(await getCountryByName('German'));


// const allInfoAboutAllCities = await getAllCities();
// const France = await getCityByName('France');
// const AsiaCountiesInfo = await getCityByRegion('Asia');
//
// const allCountries = allInfoAboutAllCities.map(country => country.name);
// const allRegions = allInfoAboutAllCities.map(country => country.region);
// const AsiaCountriesNames = AsiaCountiesInfo.map(country => country.name);
//
// console.log('All Countries: \n\n', allCountries);
// console.log('All Regions: \n\n', allRegions);
// console.log('France: ', France);
// console.log('AsiaCountiesInfo: ', AsiaCountiesInfo);