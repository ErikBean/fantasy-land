var Identity = require('./Identity')
var Maybe = require('./Maybe'), Nothing = Maybe.Nothing, Just = Maybe.Just
var cars = require('./data')

var result = new Just(5).bind(function(value){
  return new Just(6).bind(function(value2){
    return Nothing.bind(function(value3){
      console.log('Create Maybe with sum of values: ', value , value2 , value3)
      return new Just(value + value2 + value3)
    })
  })
})


console.log('Fantastic Result:', result.toString())

function sum3(a){
  return function(b){
    return function(c){
      console.log(`\t* Nested callback adding: ${a} + ${b} + ${c}`)
      return a + b + c
    }
  }
}
console.log('\n\t* But without Maybe construct, execution does not stop on errors!')
console.log('\nUnfantastic Result: ', sum3(5)()(7), '\n')


var desiredColor //want to get cars[0].color

function getColor(item){
  return item.color
}
function first(items){
  return items[0]
}
function getCars(data){
  return data.cars
}


getData('bad-foo')
  .then(function(data){
    return 
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