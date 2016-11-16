var cars = require('./data')
module.exports = {
  get: function( url ) {
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
}