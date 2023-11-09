//Calculation file
function horoscopegenerator(){
    const horoscope = ['Aries', 'Tarus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius', 'Capricorn', 'Aquarius', 'Pisces']
    return randomHoroscope = horoscope[Math.floor(Math.random() * horoscope.length)]
}
function loveAdviceGenerator(){
    const loveAdvice = ['You will find love in the most unexpected place', 'You will find love in the most expected place', 'You will find love at the most unexpected time', 'You will find love in the most expected time']
    return randomLoveAdvice = loveAdvice[Math.floor(Math.random() * loveAdvice.length)]
}

function moneyAdviceGenerator(){
    const moneyAdvice =  ['hold on to your money', 'Spend your money', 'Invest your money', 'share your money with charity', 'use your money to buy a gift for someone special', 'use your money to buy a gift for yourself']
    return randomMoneyAdvice = moneyAdvice[Math.floor(Math.random() * moneyAdvice.length)]
}

export { horoscopegenerator, loveAdviceGenerator, moneyAdviceGenerator};    
