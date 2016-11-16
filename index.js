var Identity = require('./Identity')
// var Maybe = require('./Maybe'), Nothing = Maybe.Nothing, Just = Maybe.Just
var http = require('./http')
var sanctuary = require('sanctuary'), create = sanctuary.create, env = sanctuary.env;

const S = create({
  checkTypes: process.env.NODE_ENV !== 'production',
  env: env
});
const Maybe = S.Maybe 

var desiredColor //want to get cars[0].color


function getCars(data){
  return data.cars
}

function getFirst(cars){
  return cars[0]
}

function getColor(car) {
  return car.color
}

http.get('foo')
  .then(function(data){
    const maybe = Maybe.of(data)
    const maybeColor = maybe.map(getCars).map(getFirst).map(getColor)
    console.log('color: ', maybeColor)
  })
  .catch((e) => {
    console.error('.catch() Error handler: ', e)
  })

