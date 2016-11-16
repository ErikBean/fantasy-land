var Identity = require('./Identity')
var Maybe = require('./Maybe'), Nothing = Maybe.Nothing, Just = Maybe.Just

var cars = require('./data')

var desiredColor //want to get cars[0].color

function getColor(maybe){
  return maybe.color ? new Just(maybe.color) : Nothing
}

function getCars(maybe){
  return maybe.cars? new Just(maybe.cars) : Nothing
}
function getFirst(maybe){
  return maybe.length? new Just(maybe[0]) : Nothing
}


getData('some-url')
  .then(function(data){
    var maybe = new Just(data).bind(getCars).bind(getFirst).bind(getColor)
    console.log(maybe.toString(), ': ', maybe.value)
  })
  .catch((e) => {
    //so this code is never reached! 
    console.error('.catch() Error handler: ', e)
  })
  
function getData( url ) {
  return new Promise(function(resolve, reject){
    setTimeout(() => resolve(cars), 500)
  })
}
