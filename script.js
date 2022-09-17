const log = require('log-to-file');


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function lol(){
    number = randomNumber(1, 8);
    console.log(number)
    
    switch (number){
        case 1:
            document.getElementById('label').innerHTML = 'Yes';
            break;
        case 2:
            document.getElementById('label').innerHTML = 'No';
            break; 
        case 3:
            document.getElementById('label').innerHTML = 'Ask a Friend';
            break;
        case 4:
            document.getElementById('label').innerHTML = 'Ask again';
            break;
        case 5:
            document.getElementById('label').innerHTML = 'definetly';
            break;
        case 6:
            document.getElementById('label').innerHTML = 'definitly not';
            break;
        case 7:
            document.getElementById('label').innerHTML = 'Your answer will reveal itself tomorrow'
            break;
        case 8:
            document.getElementById('label').innerHTML = 'I dont know';
            break;
        
        log(document.getElementById(jo).value)
    }
}

