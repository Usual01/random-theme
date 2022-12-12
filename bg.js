const btns = document.getElementById('btns');
const btnr = document.getElementById('btnr');
const btnc = document.getElementById('btnc');

btnc.addEventListener('click', conicgradientColors);

btnl.addEventListener('click', lineargradientColors);
btnr.addEventListener('click', radialgradientColors);


function conicgradientColors(){
  
  function arrayFromLowToHigh(low, high) {
    
    const arrayCodes = []
        for ( var i = low; i <= high; i++) {
          arrayCodes.push(i)
        }
         return arrayCodes
      }
      
  var hexletters = arrayFromLowToHigh(97, 103)
var hexnumbers = arrayFromLowToHigh(48, 53)
var color = hexletters.concat(hexnumbers)
console.log(color)
   const colorCharacters = []
   for (let i = 0; i < 6; i++) {
     const colorCode = color[Math.floor(Math.random() * color.length)]
     colorCharacters.push(String.fromCharCode(colorCode))
  }
  console.log(colorCharacters)
  var color1 = '#' + colorCharacters.join('')
  var color2 = '#' + colorCharacters.sort().join('');
  var color3 = '#' + colorCharacters.reverse().sort().join('');
  var angle = Math.round(Math.random() * 350) + "deg";
  var percent = Math.round(Math.random() * 360) + "%"
  var percent1 = Math.round(Math.random() * 360) + "%"
  var percent2 = Math.round(Math.random() * 360) + "%"

  jk = 'repeating-conic-gradient('+ color3 + " " + angle + ', ' + color1 + ', ' + color2  + ' ' + percent + ")";
  document.body.style.background = jk; 
  console.log(jk)
}
function lineargradientColors(){
  function arrayFromLowToHigh(low, high) {
    
    const arrayCodes = []
        for ( var i = low; i <= high; i++) {
          arrayCodes.push(i)
        }
         return arrayCodes
      }
      
  var hexletters = arrayFromLowToHigh(97, 103)
var hexnumbers = arrayFromLowToHigh(48, 53)
var color = hexletters.concat(hexnumbers)
console.log(color)
   const colorCharacters = []
   for (let i = 0; i < 6; i++) {
     const colorCode = color[Math.floor(Math.random() * color.length)]
     colorCharacters.push(String.fromCharCode(colorCode))
  }
  console.log(colorCharacters)
  var color1 = '#' + colorCharacters.join('')
  var color2 = '#' + colorCharacters.sort().join('');
  var color3 = '#' + colorCharacters.reverse().sort().join('');
  var angle = Math.round(Math.random() * 350) + "deg";
  var percent = Math.round(Math.random() * 360) + "%"
  var percent1 = Math.round(Math.random() * 360) + "%"
  var percent2 = Math.round(Math.random() * 360) + "%"

  jk = 'repeating-linear-gradient(' + angle + ',' + color1 + ', ' + color2 + ")";
  document.body.style.background = jk;
  console.log(jk)
  }
  function radialgradientColors(){
    function arrayFromLowToHigh(low, high) {
    
      const arrayCodes = []
          for ( var i = low; i <= high; i++) {
            arrayCodes.push(i)
          }
           return arrayCodes
        }
        
    var hexletters = arrayFromLowToHigh(97, 103)
  var hexnumbers = arrayFromLowToHigh(48, 53)
  var color = hexletters.concat(hexnumbers)
  console.log(color)
     const colorCharacters = []
     for (let i = 0; i < 6; i++) {
       const colorCode = color[Math.floor(Math.random() * color.length)]
       colorCharacters.push(String.fromCharCode(colorCode))
    }
    console.log(colorCharacters)
    var color1 = '#' + colorCharacters.join('')
    var color2 = '#' + colorCharacters.sort().join('');
    var color3 = '#' + colorCharacters.reverse().sort().join('');
    var angle = Math.round(Math.random() * 350) + "deg";
    var percent = Math.round(Math.random() * 360) + "%"
    var percent1 = Math.round(Math.random() * 360) + "%"
    var percent2 = Math.round(Math.random() * 360) + "%"
  
    jk = 'repeating-radial-gradient('+"ellipse at top, "  + color3+  ' ' +percent2+ ','  + color1 +" " + percent1+ ', ' + color2 +  " " +  percent + ")";
    document.body.style.background = jk;
    console.log(jk)
  
  }
