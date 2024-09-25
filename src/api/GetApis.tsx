import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

const All_COUNTRIES_URL= '/all';

export const getAllCountries = async(ReqType:any)=>{
    try{
        const url= All_COUNTRIES_URL;
        const response = await api.get(url,ReqType);
        return response;
    }catch(error){
        throw error;
    }
}
export const getCountriesByName = async(name:string,ReqType:any)=>{
    try{
        const url= `/name/${name}`;
        const response = await api.get(url,ReqType);
        return response;
    }catch(error){
        throw error;
    }
}