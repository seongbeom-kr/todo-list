const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);
getClock();
