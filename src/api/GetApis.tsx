import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

const All_COUNTRIES_URL= '/all';

export const getAllCountries = async()=>{
    try{
        const url= All_COUNTRIES_URL;
        const response = await api.get(url);
        return response;
    }catch(error){
        throw error;
    }
}