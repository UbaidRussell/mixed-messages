let body = document.querySelector('body');
let paragraph = document.querySelector('p');

//Calculation file
function horoscopegenerator(randomHoroscope){
    const horoscope = ['Aries', 'Tarus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius', 'Capricorn', 'Aquarius', 'Pisces']
    randomHoroscope = horoscope[Math.floor(Math.random() * horoscope.length)]
    return randomHoroscope;
}
function loveAdviceGenerator(randomLoveAdvice){
    const loveAdvice = ['You will find love in the most unexpected place', 'You will find love in the most expected place', 'You will find love at the most unexpected time', 'You will find love in the most expected time']
    randomLoveAdvice = loveAdvice[Math.floor(Math.random() * loveAdvice.length)]
    return randomLoveAdvice;
}

function moneyAdviceGenerator(randomMoneyAdvice){
    const moneyAdvice =  ['hold on to your money', 'Spend your money', 'Invest your money', 'share your money with charity', 'use your money to buy a gift for someone special', 'use your money to buy a gift for yourself']
    randomMoneyAdvice = moneyAdvice[Math.floor(Math.random() * moneyAdvice.length)]
    return randomMoneyAdvice;
}


function theChange(){
    paragraph.innerHTML = `Hello visitor, your horoscope for today is ${horoscopegenerator()}. Your love advice for today is that ${loveAdviceGenerator()}. Your money advice for today is ${moneyAdviceGenerator()}.`;
}


theChange();