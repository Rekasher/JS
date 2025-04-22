import dotenv from "dotenv";
import {getAllCountries} from "./api/getAllCities/getAllCountries";
import {getCountriesByName} from "./api/getCityByName/getCountriesByName";
import {getCountriesByRegion} from "./api/getCityByRegion/getCountriesByRegion";
import {ICountry} from "./interfaces/country-interface";

dotenv.config();

export const apikey = process.env.APIKEY;

const allCountriesInfo = await getAllCountries()
const countryByName = await getCountriesByName("France");
const countryByRegion = await getCountriesByRegion("Asia");
const countriesOnE = allCountriesInfo.filter((country: ICountry) => country.name.startsWith('E'));

console.log(countriesOnE);
