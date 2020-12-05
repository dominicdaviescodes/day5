const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// run every 30ms
let int = setInterval(blurring, 30);

function blurring() {
  // increment every 30ms
  load++;
  // upto 100
  if (load > 99) {
    // stop at 100
    clearInterval(int);
  }
  // change the text/ numbers 0 - 100%
  loadText.innerText = `${load}%`;
  // start at full opacity (1) to (0).  need to map 0-100 (the %) to 1-0 (opacity)
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // 30px is the max blur. so we map 0-100 with 30 - 0 (max blur to no blur)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
