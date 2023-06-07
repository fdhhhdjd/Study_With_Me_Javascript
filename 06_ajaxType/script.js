// Mi prendo il mio JSON con i dati
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

// fetch() restituisce una promessa
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(... data)) // i tre ... sono una sintassi di ES6, "spread" 

// Filtra i risultati in base a "wordToMatch"
// 
// es. findMatches('Bos', cities)
// restituisce un array di dimensione 2 
// con le due città (stati non ce ne sono!) 
// che hanno ne nome 'bos'
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Mostra i risultati della ricerca
// 
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.sort().map(place => {
    // evidenzia la chiave di ricerca nei risultati
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    // restituisce l'html contenente la lista
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `
  }).join('');
  suggestion.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');
searchInput.addEventListener('input', displayMatches);
