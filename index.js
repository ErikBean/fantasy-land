var Identity = require('./Identity')
// var Maybe = require('./Maybe'), Nothing = Maybe.Nothing, Just = Maybe.Just
var sanctuary = require('sanctuary'), create = sanctuary.create, env = sanctuary.env;
var cars = require('./data')
const S = create({
  checkTypes: process.env.NODE_ENV !== 'production',
  env: env
});
const Maybe = S.Maybe 

var desiredColor //want to get cars[0].color


function getCars(data){
  console.log('>>> getCars ', arguments)
  return data.cars ? data.cars : S.Nothing()
}

function getFirst(cars){
  console.log('>>> getFirst ')
  return cars.length ? cars[0] : S.Nothing()
}

function getColor(car) {
  console.log('>>> getColor ', car)
  return car.color ? car.color : S.Nothing()
}

getData('http://www.cars.com')
  .then(function(data){
    const maybe = Maybe.of(S.Nothing())
    const maybeColor = maybe.map(getCars).map(getFirst).map(getColor)
    console.log('color: ', maybeColor)
  })
  .catch((e) => {
    console.error('.catch() Error handler: ', e)
  })

function getData( url ) {
  if(url.indexOf('bad') === -1){      
    return new Promise(function(resolve, reject){
      setTimeout(() => resolve(cars), 500)
    })
  } else{
    return new Promise(function(resolve, reject){
      setTimeout(() => resolve(null), 500)
    })
  }
}