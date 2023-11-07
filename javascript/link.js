import { horoscopegenerator, loveAdviceGenerator, moneyAdviceGenerator } from './main.js';
let paragraph = document.getElementById('message')[0];

function generateMessage(){
    return `Hello visitor, your horoscope for today is ${horoscopegenerator}. Your love advice for today is that ${loveAdviceGenerator}. Your money advice for today is ${moneyAdviceGenerator}.`
}

paragraph.innerHTML = generateMessage();