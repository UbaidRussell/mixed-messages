const horoscope = ['Aries', 'Tarus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius', 'Capricorn', 'Aquarius', 'Pisces']
const randomHoroscope = horoscope[Math.floor(Math.random() * horoscope.length)]

const loveAdvice = ['You will find love in the most unexpected place', 'You will find love in the most expected place', 'You will find love at the most unexpected time', 'You will find love in the most expected time']
const randomLoveAdvice = loveAdvice[Math.floor(Math.random() * loveAdvice.length)]

const moneyAdvice =  ['Today, hold on to your money', 'Today, Spend your money', 'Today, Invest your money', 'Today, share your money with charity', 'Today, use your money to buy a gift for someone special', 'Today, use your money to buy a gift for yourself']
const randomMoneyAdvice = moneyAdvice[Math.floor(Math.random() * moneyAdvice.length)]

console.log(randomHoroscope)
console.log(randomLoveAdvice)   
console.log(randomMoneyAdvice)