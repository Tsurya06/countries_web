import { useEffect, useState, useTransition } from "react";
import { getAllCountries, getCountriesByName } from "../api/GetApis";
import { FaSearchLocation } from "react-icons/fa";
import "../App.css";
import SkeletonLoader from "../components/SkeletonLoader";

const CountryCard: React.FC<{ country: any; index: number }> = ({
  country,
  index,
}) => {
  return (
    <div className="card-content" key={index}>
      <div className="card">
        <p className="card-title">{country.name.common}</p>
        <img src={country.flags.svg} alt={country.name.common} height={"120"} />
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
};
export const Counry = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string | undefined>("");
  const [debouncedSearchText, setDebouncedSearchText] = useState<
    string | undefined
  >("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearchText && debouncedSearchText?.trim().length > 0) {
      startTransition(() => {
        getCountriesByName(debouncedSearchText)
          .then((resp) => {
            if (resp.data.length > 0) {
              setCountries(resp.data);
            }
          })
          .catch((error) => {
            if (error.response.status === 404) {
              setCountries([]);
            }
          });
      });
    } else if (debouncedSearchText?.trim().length === 0) {
      startTransition(() => {
        getAllCountries().then((resp) => {
          setCountries(resp.data);
        });
      });
    }
  }, [debouncedSearchText, startTransition]);

  return (
    <section className="about-section">
      <div className="search">
        <div className="search-input-container">
          <input
            title="Search"
            placeholder="Search Country"
            value={searchText}
            onChange={handleSearchChange}
            className="search-input"
          />
          <FaSearchLocation className="search-icon" />
        </div>
      </div>
      {!isPending && countries.length === 0 && searchText && searchText?.trim().length>0 && (
        <p className="no-data-found">Oops!! No countries found.</p>
      )}
      {!isPending ? (
        <div className="gradiant-cards">
          {countries.map((country, index) => (
            <CountryCard country={country} key={index} index={index} />
          ))}
        </div>
      ) : (
        <div className="gradiant-cards">
          {Array.from({ length: 6 }, (_, index) => (
            <div className="card-content" key={index}>
              <SkeletonLoader />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
