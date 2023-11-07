import { horoscopegenerator, loveAdviceGenerator, moneyAdviceGenerator } from './main.js';
let body = document.querySelector('body');
let paragraph = document.querySelector('p')[0];



body.onload = function(){
    paragraph.innerHTML = `Hello visitor, your horoscope for today is ${horoscopegenerator}. Your love advice for today is that ${loveAdviceGenerator}. Your money advice for today is ${moneyAdviceGenerator}.`;
}
