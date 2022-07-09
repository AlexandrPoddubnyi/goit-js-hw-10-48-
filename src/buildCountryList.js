import './css/styles.css';

export const buildCountryList = (countries) => {
  return countries.map(country => 
    `
  <li>
    <img src="${country.flags.svg}" height=30>
    <p>${country.name.official}</p>
  </li>
  `
  ).join('');
};