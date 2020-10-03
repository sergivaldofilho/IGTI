let allDevs = [];
let filterDevs = [];
let lowerCaseName = null;

let tabDevs = null;
let countDevs = 0;

let namedInput = null;
let checkInput = null;
let checkJava = null;
let checkJavaScript = null;
let checkPython = null;
let radioAND = null;
let radioOR = null;

window.addEventListener('load', start);
window.addEventListener('input', start);

async function start() {
  checkInput = document.querySelector('#search-dev').value;
  tabDevs = document.querySelector('#tabDevs');
  countDevs = document.querySelector('#countDevs');
  checkJava = document.querySelector('#checkJava');
  checkJavaScript = document.querySelector('#checkJavaScript');
  checkPython = document.querySelector('#checkPython');
  radioAND = document.querySelector('#radioAnd');
  radioOR = document.querySelector('#radioOr');

  await doFetchDev();
  filterInput(checkInput);
  applyFilter();
}

async function doFetchDev() {
  const fetchDevList = await fetch('http://localhost:3001/devs');
  const jsonDevList = await fetchDevList.json();
  allDevs = jsonDevList.map((devs) => {
    const { name, picture, programmingLanguages } = devs;

    // lowerCaseName = name
    //   .normalize('NFD')
    //   .replace(/[^a-zA-Zs]/g, '')
    //   .toLocaleLowerCase();

    return {
      name,
      nameLowerCase: lowerCaseName,
      picture,
      programmingLanguages,
      flags: flagsLanguages(programmingLanguages),
    };
  });
  allDevs = allDevs.sort((a, b) => a.name.localeCompare(b.name));

  render();
}

function render() {
  renderDevs();
  renderSummaryDevs();
  // handleLanguagesCheckbox();
}

function renderDevs() {
  // if (filterDevs.length === 0 && radioOR.checked) {
  //   filterDevs = allDevs;
  // }

  let devsHTML = '<div>';

  allDevs.forEach((dev) => {
    const { name, picture, flags } = dev;

    const devHTML = `
      <div class='col s12 m6 l4'>
        <div class='dev-card'>
          <img src="${picture}" alt="${name}">
          <div>
            <li>${name}</li>
            <li>${flags}</li>
          </div>
        </div>
      </div>
    `;

    devsHTML += devHTML;
  });

  devsHTML += '</div>';
  tabDevs.innerHTML = devsHTML;
}

function renderSummaryDevs() {
  countDevs.textContent = allDevs.length;
}

function flagsLanguages(programmingLanguages) {
  const flagsDevs = programmingLanguages
    .map((language) => {
      if (language.id === 'Java') {
        return `<img class="icons-languages" src="./img/java.png">`;
      } else if (language.id === 'JavaScript') {
        return `<img class="icons-languages" src="./img/javascript.png">`;
      } else if (language.id === 'Python') {
        return `<img class="icons-languages" src="./img/python.png">`;
      }
    })
    .join(' ');
  return flagsDevs;
}

function filterInput(textoInput) {
  // filterDevs = allDevs;

  allDevs = allDevs.filter((item) =>
    remover_acentos_espaco(item.name).includes(
      remover_acentos_espaco(textoInput)
    )
  );
  render();
}

function remover_acentos_espaco(str) {
  return str
    .normalize('NFD')
    .replace(/[^a-zA-Zs]/g, '')
    .toLowerCase();
}

function applyFilter() {
  // filterDevs = allDevs;
  let langs = [];

  if (checkJava.checked) langs.push('Java');
  if (checkJavaScript.checked) langs.push('JavaScript');
  if (checkPython.checked) langs.push('Python');

  allDevs = allDevs.filter((item) => {
    if (radioOR.checked) {
      return item.programmingLanguages.some((lang) =>
        langs.includes(lang.language)
      );
    } else {
      return (
        item.programmingLanguages.map((lang) => lang.language).join('') ===
        langs.join('')
      );
    }
  });
  render();
}
