// promises

var diceRoll = function() {
  return Math.floor(Math.random() * 6 + 1);
};

var p1 = new Promise(function(faulfill, reject) {
  var thisRoll = diceRoll();
  if (thisRoll === 6) {
    fulfill(thisRoll);
  }  else {
    reject(thisRoll);
  }
});


p1
  .then(function(thisRoll){
    console.log('Yay, rolled a', thisRoll);
  })
  .catch(function(thisRoll){
    console.log('Boo, rolled a', thisRoll);
  })
