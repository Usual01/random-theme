const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.background = randomBg();
    randomBg();
});

function randomBg(){
    return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`
};

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function gaga(){
    function getRandomLower(){
        return String.fromCharCode (Math.floor(Math.random() * 26) + 97)
    }
    function getRandomNumber(){
        return String.fromCharCode (Math.floor(Math.random() * 10) + 48)
        
    }
    console.log('I am a boy')
    
    let small=getRandomLower()
    let number = getRandomNumber() 
    console.log(small)
    let combined = []
    for(let i=0; i<7; i++){
        var color =  small.concat(number) 
        combined.push(color)
        console.log(color)
    }
    return combined.join('')
    console.log(color)
}
//hsl(hue, saturation, lightness)