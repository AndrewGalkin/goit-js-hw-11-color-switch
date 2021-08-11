const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  StartBtn: document.querySelector(".js-start"),
  StopBtn: document.querySelector(".js-stop"),
  body: document.querySelector("body")

}
let interval;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function changeBgc(colors) {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.background = colors[randomColor];
}

const StartChangeColor = () =>{
  refs.StartBtn.disabled = true;
  interval = setInterval(() => {
    changeBgc(colors);
  }, 1000);


}
const StopChangeColor = () =>{
  refs.StartBtn.disabled = false;
  clearInterval(interval);
}

refs.StartBtn.addEventListener("click", StartChangeColor)
refs.StopBtn.addEventListener("click", StopChangeColor)