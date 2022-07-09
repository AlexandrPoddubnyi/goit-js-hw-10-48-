import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from '../src/fetchCountries';
import { buildCountryInfo } from '../src/buildCountryInfo';
import { buildCountryList } from '../src/buildCountryList';

const DEBOUNCE_DELAY = 300;

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const input = document.querySelector('#search-box');



input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
  
function onInput() {
  
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  const name = input.value.trim();
    
  fetchCountries(name)
    .then(countries => {
      const countriesArray = countries.length;
      if (countriesArray === 1) {
        
        countryInfo.style.listStyle = 'none';
        countryInfo.innerHTML = buildCountryInfo(countries);
      }
      else if (countriesArray > 10) {
        Notiflix.Notify.failure("Too many matches found. Please enter a more specific name.");
      }
      else {
        countryList.style.listStyle = 'none';
        countryList.innerHTML = buildCountryList(countries);
        countryInfo.innerHTML = '';
      }
    })
  .catch(error => Notiflix.Notify.failure("Oops, there is no country with that name"))
};