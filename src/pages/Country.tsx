import { useEffect, useState, useTransition } from "react";
import { getAllCountries } from "../api/GetApis";


const CountryCard: React.FC<{ country: any; index: number }> = ({ country, index }) => {
  return (
    <div className="card-content" key={index}>
      <div className="card">
        <p className="card-title">{country.name.common}</p>
        <ul className="card-desc">
          <li>
            <b>Capital:</b> {country.capital}
          </li>
          <li>
            <b>Population:</b> {country.population}
          </li>
          <li>
            <b>Region:</b> {country.region}
          </li>
        </ul>
      </div>
    </div>
  );
}
export const Counry = () => {
  const [isPending,startTransition]= useTransition();
  const [countries,setCountries]= useState<any[]>([]);
  
  useEffect(() => {
    
    startTransition( () => {
       getAllCountries().then((resp)=>{
        console.log(resp.data);
        setCountries(resp.data);
       });
    });
  },[]); 
  return (
    <section className="about-section">
      {!isPending && <div className="gradiant-cards">
        {countries.map((country, index) => (
          <CountryCard  country={country} key={index} index={index} />
        ))}
      </div>}
    </section>
  );
};
