// Identity Monad
// 1. Left Identity: Identity(a).bind(f) === f(a)
// 2. Right identity: Identity.bind(Identity) === Identity

// A value that implements the Monad specification must also implement the Applicative and Chain specifications.


function Identity (value) {
    this.value = value;
}

Identity.prototype.bind = function(transform) {
    return transform(this.value);
};

Identity.prototype.toString = function() {
    return 'Identity(' + this.value + ')';
};

module.exports = Identity