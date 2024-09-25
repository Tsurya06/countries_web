import "../App.css";

export const CountryCard: React.FC<{ country: any; index: number }> = ({
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
