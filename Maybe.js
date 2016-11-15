var Identity = require('./Identity')

var Nothing = {
    bind: function() {
        //transform is not called! Keeps loopig back to here on addl .binds() 
        return this;
    },
    toString: function() {
        return 'Nothing';
    }
};

function Just(value) {
    return Identity.call(this, value)
}

Just.prototype.bind = Identity.prototype.bind;

Just.prototype.toString = function() {
    return 'Just(' +  this.value + ')';
};

module.exports = { Nothing, Just }
