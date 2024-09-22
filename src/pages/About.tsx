import '../App.css';
export const About = () => {
    const countries=[
      {name:"India", capital:"New Delhi", population:1380004385, states:28},
      {name:"USA", capital:"Washington D.C.", population:331002651, states:50},
      {name:"China", capital:"Beijing", population:1439323776, states:34},
      {name:"Japan", capital:"Tokyo", population:126476461, states:47},
      {name:"Germany", capital:"Berlin", population:83783942, states:16},
      {name:"France", capital:"Paris", population:67025461, states:78},
      {name:"Brazil", capital:"Brasília", population:212559417, states:26},
      {name:"Russia", capital:"Moscow", population:146793759, states:17},
      {name:"Canada", capital:"Ottawa", population:37742154, states:13},
      {name:"Australia", capital:"Canberra", population:25499881, states:26},
      {name:"Mexico", capital:"Mexico City", population:128932753, states:32},
      {name:"Egypt", capital:"Cairo", population:101539000, states:21},
      {name:"United Kingdom", capital:"London", population:67886011, states:33},
      {name:"Italy", capital:"Rome", population:60461827, states:30},
      {name:"Spain", capital:"Madrid", population:46754778, states:19},
      {name:"Turkey", capital:"Ankara", population:84339067, states:39},
      {name:"Argentina", capital:"Buenos Aires", population:45195774, states:27},
      {name:"Indonesia", capital:"Jakarta", population:273523615, states:34},
      {name:"Netherlands", capital:"Amsterdam", population:17134872, states:12},
      {name:"Sweden", capital:"Stockholm", population:10099265, states:20},
      {name:"Switzerland", capital:"Bern", population:8654622, states:8},
      {name:"Norway", capital:"Oslo", population:5421007, states:14},
      {name:"Denmark", capital:"Copenhagen", population:5792202, states:5},
      {name:"Finland", capital:"Helsinki", population:5540726, states:14},
      {name:"Ireland", capital:"Dublin", population:4887141, states:37},
      {name:"Greece", capital:"Athens", population:10423054, states:10},
      {name:"Czech Republic", capital:"Prague", population:10708981, states:13},
      {name:"Poland", capital:"Warsaw", population:37846611, states:15},
      {name:"Romania", capital:"Bucharest", population:19237691, states:23},
      {name:"Ukraine", capital:"Kiev", population:43733756, states:49},
      {name:"Belarus", capital:"Minsk", population:9449323, states:6},
      {name:"Hungary", capital:"Budapest", population:9660352, states:21},
      {name:"Slovakia", capital:"Bratislava", population:5459642, states:48},
      {name:"Lithuania", capital:"Vilnius", population:2722296, states:39},
      {name:"Estonia", capital:"Tallinn", population:1326535, states:15},
      {name:"Latvia", capital:"Riga", population:2217969, states:19},
      {name:"Moldova", capital:"Chisinau", population:3280065, states:29},
      {name:"Andorra", capital:"Andorra la Vella", population:77265, states:1},
      {name:"Monaco", capital:"Monaco", population:39242, states:1},
      {name:"San Marino", capital:"San Marino", population:33938, states:1},
      {name:"Vatican City", capital:"Vatican City", population:800, states:1},
      {name:"Liechtenstein", capital:"Vaduz", population:38128, states:1},
      {name:"San Marino", capital:"San Marino", population:33938, states:1},
      {name:"Vatican City", capital:"Vatican City", population:800, states:1},
      {name:"Liechtenstein", capital:"Vaduz", population:38128, states:1},
      {name:"San Marino", capital:"San Marino", population:33938, states:1},
      {name:"Vatican City", capital:"Vatican City", population:800, states:1},
      {name:"Liechtenstein", capital:"Vaduz", population:38128, states:1},
      {name:"San Marino", capital:"San Marino", population:33938, states:1},
      {name:"Vatican City", capital:"Vatican City", population:800, states:1},
      {name:"Liechtenstein", capital:"Vaduz", population:38128, states:1},
      {name:"San Marino", capital:"San Marino", population:33938, states:1},
      {name:"Vatican City", capital:"Vatican City", population:800, states:1},
      {name:"Liechtenstein", capital:"Vaduz", population:38128, states:1},
      {name:"San Marino", capital:"San Marino", population:33938, states:1},
      {name:"Vatican City", capital:"Vatican City", population:800, states:1},
      {name:"Liechtenstein", capital:"Vaduz", population:38128, states:1},
      {name:"San Marino", capital:"San Marino", population:33938, states:1},
      {name:"Vatican City", capital:"Vatican City", population:800, states:1},
      {name:"Liechtenstein", capital:"Vaduz", population:38128, states:1},
      {name:"San Marino", capital:"San Marino", population:33938, states:1},
      {name:"Vatican City", capital:"Vatican City", population:800, states:1},
    ]
  return (
    <section className="about-section">
      <h2 className="about-container-title">
        Here are some interesting facts
        <br />
        about we proudly present to you.
      </h2>
      <div className="gradiant-cards">
        {countries.map((country, index) => (
          <div className="card-content" key={index}>
            <div className="card">
              <p className="card-title">{country.name}</p>
              <ul className="card-desc">
                <li><b>Capital:</b> {country.capital}</li>
                <li><b>Population:</b> {country.population}</li>
                <li><b>Number of States:</b> {country.states}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
