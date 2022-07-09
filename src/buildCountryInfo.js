import './css/styles.css';

export const buildCountryInfo = (countries) => {
  return countries.map(country => 
     `
          <li>
            <img src="${country.flags.svg}" height=30>
            <p>${country.name.official}</p>
          </li>
          <li>
            <p>Capital:${country.capital}</p>
          </li>
          <li>
            <p>Population:${country.population}</p>
          </li>
          <li>
            <p>Languages:${Object.values(country.languages)}</p>
          </li>
    `
  ).join('');
};