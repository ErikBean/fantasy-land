var Maybe = require('ramda-fantasy').Maybe
// var Nothing = require('ramda-fantasy').Maybe
var cars = require('./data')

function getCars(data){
  console.log('level 1', data)
  return data.cars ? Maybe.of(data.cars) : Maybe.Nothing()
}

function first(items){
  console.log('level 2')
  return items.length ? Maybe.of(items[0]) : Maybe.Nothing()
}

function getColor(item){
  console.log('level 3')
  return item.color ? Maybe.of(item.color) : Maybe.Nothing()
}

getData('some-url')
  .then(function(data){
    var m =  Maybe.of(data).chain(getCars).chain(first).chain(getColor)
    console.log(m.toString())
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