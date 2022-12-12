const btns = document.getElementById('btns'),btnr = document.getElementById('btnr'),btnc = document.getElementById('btnc');

btnc.addEventListener('click', conicgradientColors);
btnl.addEventListener('click', lineargradientColors);
btnr.addEventListener('click', radialgradientColors);

var angle = Math.round(Math.random() * 360) + "deg";
var percent = Math.round(Math.random() * 360) + "%"
var percent1 = Math.round(Math.random() * 360) + "%"
var percent2 = Math.round(Math.random() * 360) + "%"

function arrayFromLowToHigh(low, high) {    
  const arrayCodes = []
for ( var i = low; i <= high; i++){arrayCodes.push(i)}return arrayCodes
}
function conicgradientColors(){
var hexletters = arrayFromLowToHigh(48, 53).concat(97, 103)
const colorCharacters = []
   for (let i = 0; i < 6; i++) {
     const colorCode = hexletters[Math.floor(Math.random() * hexletters.length)]
     colorCharacters.push(String.fromCharCode(colorCode))
  }
var color1 = '#' + colorCharacters.join('')
var color2 = '#' + colorCharacters.sort().join('');
var color3 = '#' + colorCharacters.reverse().sort().join('');
jk = `repeating-conic-gradient(${color3} ${angle} , ${color1} ${percent1}, ${color2} ${percent}, ${color3} ${percent2})`
document.body.style.background = jk; 
}
function lineargradientColors(){
var hexletters = arrayFromLowToHigh(48, 53).concat(97, 103)
const colorCharacters = []
for (let i = 0; i < 6; i++) {
     const colorCode = hexletters[Math.floor(Math.random() * hexletters.length)]
     colorCharacters.push(String.fromCharCode(colorCode))
  }
  var color1 = '#' + colorCharacters.join('')
  var color2 = '#' + colorCharacters.sort().join('');
  var color3 = '#' + colorCharacters.reverse().sort().join('');
jk = `repeating-linear-gradient(${angle}, ${color1} ${percent1}, ${color2} ${percent2}, ${color3} ${percent})`;
  document.body.style.background = jk;
  }
  for (let i = 0; i < 6; i++) {
    const colorCode = hexletters[Math.floor(Math.random() * hexletters.length)]
    colorCharacters.push(String.fromCharCode(colorCode))
}
  function radialgradientColors(){
    var hexletters = arrayFromLowToHigh(48, 53).concat(97, 103)
   const colorCharacters = []
for (let i = 0; i < 6; i++) {
     const colorCode = hexletters[Math.floor(Math.random() * hexletters.length)]
     colorCharacters.push(String.fromCharCode(colorCode))
}
var color1 = '#' + colorCharacters.join('')
var color2 = '#' + colorCharacters.sort().join('');
var color3 = '#' + colorCharacters.reverse().sort().join('');
jk =`repeating-radial-gradient(ellipse at center, ${color1} ${percent1}, ${color2} ${percent2}, ${color3} ${percent})`
    document.body.style.background = jk;
  }
