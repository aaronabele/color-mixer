/*
const sliderR = document.querySelector("#slider-red");
const sliderG = document.querySelector("#slider-green");
const sliderB = document.querySelector("#slider-blue");

//Elemente für Farbanzeige
const displayR = document.querySelector(".display-r");
const displayG = document.querySelector(".display-g");
const displayB = document.querySelector(".display-b");

const btn = document.querySelector("#btn");

const mainElement = document.querySelector("#haupt");

let r = 50;
let g = 50;
let b = 50;

function updateSilderValues() {
  sliderR.value = r;
  sliderG.value = g;
  sliderB.value = b;
}

sliderR.addEventListener("input", (e) => {
  r = e.target.value;
  updateColor();
});

sliderG.addEventListener("input", (e) => {
  g = e.target.value;
  updateColor();
});

sliderB.addEventListener("input", (e) => {
  b = e.target.value;
  updateColor();
});

function updateColor() {
  setBackgroundColor();
  setColorValue();
}

updateColor();
updateSilderValues();

function setColorValue() {
  displayR.innerHTML = r;
  displayG.innerHTML = g;
  displayB.innerHTML = b;
}

function setBackgroundColor() {
  mainElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((color) => {
      r = color.rgb.r;
      g = color.rgb.g;
      b = color.rgb.b;
      updateColor();
      updateSilderValues();
    });
});
*/
Vue.createApp({
  data() {
    return {
      valueRed: 50,
      valueGreen: 50,
      valueBlue: 50,
    };
  },
  computed: {
    total() {
      return this.valueRed, this.valueGreen, this.valueBlue;
    },
    setBackgroundColor() {
      document.body.style.backgroundColor = `rgb(${this.valueRed}, ${this.valueGreen}, ${this.valueBlue})`;
    },
  },
  methods: {
    randomColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((color) => {
          this.valueRed = color.rgb.r;
          this.valueGreen = color.rgb.b;
          this.valueBlue = color.rgb.g;
        });
    },
  },
}).mount("#app");
