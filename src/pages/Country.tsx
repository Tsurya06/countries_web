import { useEffect, useState, useTransition } from "react";
import { getAllCountries, getCountriesByName } from "../api/GetApis";
import { FaSearchLocation } from "react-icons/fa";
import "../App.css";
import SkeletonLoader from "../components/SkeletonLoader";
import { CountryCard } from "../components/CountryCard";


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
        getCountriesByName(debouncedSearchText,
            {params: {
              limit: 10,
              offset: 0,
              page: 1,
              order_by: "population",
            }}
          )
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
        getAllCountries({params: {
          limit: 10,
          offset: 0,
          page: 1,
          order_by: "population",
        }}).then((resp) => {
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
      {!isPending && !countries.length && searchText && searchText?.trim().length>0 && (
        <p className="no-data-found">Oops!! No countries found.</p>
      )}
      {!isPending && countries.length  ? (
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
