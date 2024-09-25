import { useEffect, useState, useTransition } from "react";
import "../App.css";
import { getAllCountries } from "../api/GetApis";
import SkeletonLoader from "../components/SkeletonLoader";
import { CountryCard } from "../components/CountryCard";
export const About = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState<any[]>([]);
  useEffect(() => {
    startTransition(() => {
      getAllCountries({params: {
        limit: 10,
        offset: 0,
        page: 1,        
      }}).then((resp) => {
        setCountries(resp.data);
      });
    });
  }, []);
  return !isPending && countries.length ? (
    <section className="about-section">
      
      <h2 className="about-container-title">
        Here are some interesting facts
        <br />
        about we proudly present to you.
      </h2>
      <div className="gradiant-cards">
        {countries.map((country, index) => (
          <CountryCard country={country} key={index} index={index} />
        ))}
      </div>
    </section>
  ) : (
    <section className="gradiant-cards">
      {Array.from({ length: 6 }, (_, index) => (
        <div className="card-content" key={index}>
          <SkeletonLoader />
        </div>
      ))}
    </section>
  );
};
