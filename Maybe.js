var Identity = require('./Identity')

var Nothing = {
    bind: function() {
        //transform is not called! Keeps loopig back to here on addl .binds() 
        return this;
    },
    toString: function() {
        return 'Nothing';
    },
    isSomething: function(){
      return false
    }
};

function Just(value) {
    return Identity.call(this, value)
}

Just.prototype.bind = Identity.prototype.bind;

Just.prototype.isSomething = function(){
  return true;
}

Just.prototype.toString = function() {
    return 'Just(' +  this.value + ')';
};

module.exports = { Nothing, Just }
