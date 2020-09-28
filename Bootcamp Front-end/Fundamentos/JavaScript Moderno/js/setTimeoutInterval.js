window.addEventListener('load', () => {
  const timer = document.querySelector('#timers');
  let count = 0;

  //A função setInterval posterga e repete as execuções a cada x milisegundos
  const interval = setInterval(() => {
    // console.log('interval');
    timer.textContent = ++count;

    if (count === 10) {
      //É importante a utilização do clearInterval para parar a função setInterval
      clearInterval(interval);
      return;
    }

    // A função setTimeout é utilizada para postergar execuções
    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = count + '.5';
      }, 500);
    }
  }, 1000);
});
