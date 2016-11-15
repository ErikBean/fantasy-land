var Identity = require('./Identity')

var result = new Identity(5).bind(function(value){
  return new Identity(6).bind(function(value2){
    return new Identity(7).bind(function(value3){
      return new Identity(value + value2 + value3)
    })
  })
})


console.log(result.toString())