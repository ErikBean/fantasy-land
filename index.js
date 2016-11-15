var Identity = require('./Identity')
var Maybe = require('./Maybe'), Nothing = Maybe.Nothing, Just = Maybe.Just

var result = new Just(5).bind(function(value){
  return new Just(6).bind(function(value2){
    return new Just(7).bind(function(value3){
      console.log('Create Maybe with sum of values: ', value , value2 , value3)
      return new Just(value + value2 + value3)
    })
  })
})


console.log(result.toString())

function sum3(a){
  return function(b){
    return function(c){
      console.log(`Nested callback executes: ${a} + ${b} + ${c}`)
      return a + b + c
    }
  }
}

console.log('Works fine when there is no Error: ', sum3(5)(6)(7))
