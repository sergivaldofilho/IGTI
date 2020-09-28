/*
 * Estado da aplicação (state)
 */
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoritesCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');
  totalPopulationList = document.querySelector('#totalPopulationList');
  // prettier-ignore
  totalPopulationFavorites = document.querySelector('#totalPopulationFavorites');
  numberFormat = Intl.NumberFormat('pt-BR');
  fetchCountry();
});

async function fetchCountry() {
  const countriesList = await fetch('https://restcountries.eu/rest/v2/all');
  const jsonCountriesList = await countriesList.json();
  allCountries = jsonCountriesList.map((country) => {
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.br,
      population,
      formattedPopulation: formatNumber(population),
      flag,
    };
  });
  allCountries = allCountries.sort((a, b) => a.name.localeCompare(b.name));

  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
}

function renderCountryList() {
  let countriesHTML = '<div>';

  allCountries.forEach((country) => {
    const { name, flag, id, formattedPopulation } = country;

    const countryHTML = `
      <div class='country'>
        <div>
          <a class="waves-effect waves-light btn" id="${id}">+</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}">
        </div>
        <div>
          <li>${name}</li>
          <li>${formattedPopulation}</li>
        </div>
      </div>
    `;
    countriesHTML += countryHTML;
  });

  countriesHTML += '</div>';
  tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {
  let favoritesHTML = '<div>';

  favoritesCountries.forEach((country) => {
    const { name, flag, id, formattedPopulation } = country;

    const favoriteHTML = `
      <div class='country'>
        <div>
          <a class="waves-effect waves-light btn red darken-4" id="${id}">-</a>
        </div>
        <div>
          <img src="${flag}" alt="${name}">
        </div>
        <div>
          <li>${name}</li>
          <li>${formattedPopulation}</li>
        </div>
      </div>
    `;
    favoritesHTML += favoriteHTML;
  });

  favoritesHTML += '</div>';
  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoritesCountries.length;
  // const sumCountry = allCountries.length; //Outra opção possível

  const sumPopulationCountries = allCountries.reduce(
    (acc, curr) => (acc += curr.population),
    0
  );

  const sumPopulationFavorites = favoritesCountries.reduce(
    (acc, curr) => (acc += curr.population),
    0
  );

  totalPopulationList.textContent = formatNumber(sumPopulationCountries);
  totalPopulationFavorites.textContent = formatNumber(sumPopulationFavorites);
  // countCountries.innerHTML = sumCountry;
}

function handleCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach((button) => {
    button.addEventListener('click', () => addToFavorites(button.id));
  });

  favoriteButtons.forEach((button) => {
    button.addEventListener('click', () => removeFromFavorites(button.id));
  });
}

function addToFavorites(id) {
  const countryToAdd = allCountries.find((country) => country.id === id);
  favoritesCountries = [...favoritesCountries, countryToAdd];
  favoritesCountries.sort((a, b) => a.name.localeCompare(b.name));

  allCountries = allCountries.filter((country) => country.id !== id);
  render();
}

function removeFromFavorites(id) {
  const countryToRemove = favoritesCountries.find(
    (country) => country.id === id
  );
  allCountries = [...allCountries, countryToRemove];
  allCountries.sort((a, b) => a.name.localeCompare(b.name));

  favoritesCountries = favoritesCountries.filter(
    (country) => country.id !== id
  );
  render();
}

function formatNumber(number) {
  return numberFormat.format(number);
}
