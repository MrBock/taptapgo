const body = document.body;

function toggleBackgroundColor() {
  body.classList.toggle('is-inverted');
}

const demoRhythmListener = e => {
  if (e.keyCode === 13) {
    showChangeRhythm();
  }
};
const tapRhythmListener = e => {
  if (e.keyCode === 32) {
    toggleBackgroundColor();
  }
};
body.addEventListener('keydown', demoRhythmListener);

function createTimingArray(numbersInArray) {
  const array = [];
  for (let i = 0; i < numbersInArray; i++) {
    const randomNumber = Math.round(Math.random() * (2000 - 500) + 500);
    array.push(randomNumber);
  }
  return array;
}

const currentRound = createTimingArray(5);
console.log(currentRound);

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

async function showChangeRhythm() {
  body.classList.remove('is-screen-intro');
  body.classList.remove('is-screen-intro-two');
  body.removeEventListener('keydown', demoRhythmListener);
  for (let i of currentRound) {
    await sleep(i);
    toggleBackgroundColor();
  }
  body.classList.add('is-screen-intro-two');
  body.addEventListener('keydown', demoRhythmListener);
}
