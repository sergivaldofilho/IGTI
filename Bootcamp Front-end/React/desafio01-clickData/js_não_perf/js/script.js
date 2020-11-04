window.addEventListener('load', start);

const clickArray = [];

function start() {
  const button = document.querySelector('#clickButton');
  button.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
  // const now = new Date();
  // clickArray.push(now.toISOString());
  clickArray.push(getNewTimestamp());

  // console.log(clickArray);
  render();
}

function render() {
  const ul = document.querySelector('#data');
  ul.innerHTML = '';

  let list = '';

  clickArray.map((item) => {
    list += `<li>${item}</li>`;
  });
  ul.innerHTML = list;

  document.title = clickArray.length;
}
