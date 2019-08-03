const body = document.body;

function toggleBackgroundColor() {
  body.classList.toggle('is-inverted');
}
body.addEventListener('keydown', function(e) {
  if (e.keyCode === 32) {
    toggleBackgroundColor();
  }
});

function createTimingArray(numbersInArray) {
  const array = [];
  for (let i = 0; i < numbersInArray; i++) {
    const randomNumber = Math.round(Math.random() * (2000 - 500) + 500);
    array.push(randomNumber);
  }
  return array;
}

const firstRound = createTimingArray(5);
console.log(firstRound);

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

async function showChangeRhythm() {
  for (let i of firstRound) {
    await sleep(i);
    toggleBackgroundColor();
  }
}

showChangeRhythm();
