function setBackgroundColor(r, g, b) {
  const mainElement = document.querySelector("#haupt");

  mainElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

const sliderR = document.querySelector("#slider-red");
const sliderG = document.querySelector("#slider-green");
const sliderB = document.querySelector("#slider-blue");

let r = 50;
let g = 50;
let b = 50;

sliderR.value = r;
sliderG.value = g;
sliderB.value = b;

sliderR.addEventListener("input", (e) => {
  r = e.target.value;
  setBackgroundColor(r, g, b);
  setColorValue(r, g, b);
});

sliderG.addEventListener("input", (e) => {
  g = e.target.value;
  setBackgroundColor(r, g, b);
  setColorValue(r, g, b);
});

sliderB.addEventListener("input", (e) => {
  b = e.target.value;
  setBackgroundColor(r, g, b);
  setColorValue(r, g, b);
});

setBackgroundColor(r, g, b);

//Elemente für Farbanzeige
const displayR = document.querySelector(".display-r");
const displayG = document.querySelector(".display-g");
const displayB = document.querySelector(".display-b");

function setColorValue(r, g, b) {
  displayR.innerHTML = r;
  displayG.innerHTML = g;
  displayB.innerHTML = b;
}

displayR.innerHTML = r;
displayG.innerHTML = g;
displayB.innerHTML = b;

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((color) => {
      sliderR.value = color.rgb.r;
      sliderG.value = color.rgb.g;
      sliderB.value = color.rgb.b;
      displayR.innerHTML = color.rgb.r;
      displayG.innerHTML = color.rgb.g;
      displayB.innerHTML = color.rgb.b;
      setBackgroundColor(color.rgb.r, color.rgb.g, color.rgb.b);
    });
});
