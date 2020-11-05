
const refs = {
  body: document.querySelector('body'),
  startBtn : document.querySelector("button[data-action='start']"),
  stopBtn : document.querySelector("button[data-action='stop']"),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let changeBodyColor;

const changeTheme = () => {
  refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length-1)];
}

function startChangeColor() {
  changeTheme();
  changeBodyColor = setInterval(changeTheme, 1000);
}

function stopChangeColor() {
  clearInterval(changeBodyColor);
}


refs.startBtn.addEventListener("click", () => {
  refs.startBtn.disabled = true;
  startChangeColor();
})

refs.stopBtn.addEventListener("click", () => {
  refs.startBtn.disabled = false;
  stopChangeColor();
  // refs.body.style.background = null;
})