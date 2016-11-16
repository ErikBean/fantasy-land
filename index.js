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
  return Maybe.of(data.cars)
}

function getFirst(cars){
  return Maybe.of(cars[0])
}

function getColor(car) {
  return Maybe.of(car.color)
}

getData('http://www.cars.com')
  .then(function(data){
    const maybe = Maybe.of(data)
    const maybeColor = maybe.chain(getCars).chain(getFirst).chain(getColor)
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